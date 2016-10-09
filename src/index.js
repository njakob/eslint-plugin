
const PREFIX = 'njakob';

const rules = {
  
};

function buildExportedRules() {
  const exportedRules = {};
  for (let key in rules) {
    if (rules.hasOwnProperty(key)) {
      exportedRules[`${PREFIX}/${key}`] = key;
    }
  }
}

module.exports = {
  rules: buildExportedRules(),
};
