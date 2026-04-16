import { em } from '@pierreburel/rem';

const defaults = {
  name: 'em-convert',
  precision: 5
};

const plugin = (options = {}) => {
  const { name, ...convertOptions } = { ...defaults, ...options };
  const regexp = new RegExp('(?!\\W+)' + name + '\\(([^\(\)]+)\\s*,\\s*(\\d*\\.?\\d+)px\\)', 'g');

  return {
    postcssPlugin: 'postcss-em',
    Once(root) {
      root.replaceValues(regexp, { fast: name + '(' }, (_, values, context) => em(values, parseFloat(context), convertOptions));
    }
  };
};

plugin.postcss = true;
export default plugin;
