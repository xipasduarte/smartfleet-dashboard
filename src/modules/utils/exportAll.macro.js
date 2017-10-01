/* eslint-disable import/no-extraneous-dependencies */
const { createMacro } = require("babel-macros");
const glob = require("glob");
const path = require("path");

function getImportSources(callExpressionPath, cwd) {
  let globValue;

  try {
    globValue = callExpressionPath.get("arguments")[0].evaluate().value;
  } catch (error) {
    // ignore the error
    // add a console.log here if you need to know more specifically what's up...
  }

  if (!globValue) {
    throw new Error(
      `There was a problem evaluating the value of the argument for the code: ${callExpressionPath.getSource()}. ` +
        `If the value is dynamic, please make sure that its value is statically deterministic.`
    );
  }

  return glob.sync(globValue, { cwd });
}

function exportAll({ references, state, babel }) {
  references.default.forEach(referencePath => {
    const { types } = babel;
    const { file: { opts: { filename } } } = state;
    const callExpressionPath = referencePath.parentPath;

    const importSources = getImportSources(
      callExpressionPath,
      path.dirname(filename)
    );

    referencePath.parentPath.replaceWithMultiple(
      importSources.map(source => {
        let id;
        if (source.match(/^.*\/([^\/]+)\/index.jsx?$/)) {
          id = source.replace(/^.*\/([^\/]+)\/index.jsx?$/, "$1");
        } else {
          id = source.replace(/^.*\/([^\/]+).jsx?$/, "$1");
        }

        return types.exportNamedDeclaration(
          null,
          [
            types.exportSpecifier(
              types.identifier("default"),
              types.identifier(id)
            )
          ],
          types.stringLiteral(source)
        );
      })
    );
  });
}

module.exports = createMacro(exportAll);
