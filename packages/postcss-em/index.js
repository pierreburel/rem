const { em } = require('@pierreburel/rem');

const defaults = {
  name: 'em-convert',
  precision: 5
};

module.exports = (options = {}) => {
  const { name, ...convertOptions } = { ...defaults, ...options };
  const regexp = new RegExp('(?!\\W+)' + name + '\\(([^\(\)]+)\\s*,\\s*(\\d*\\.?\\d+)px\\)', 'g');

  return {
    postcssPlugin: 'postcss-em',
    Once(root) {
      root.replaceValues(regexp, { fast: name + '(' }, (_, values, context) => em(values, parseFloat(context), convertOptions));
    }
  };
};

module.exports.postcss = true;
