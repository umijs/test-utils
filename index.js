const { join } = require('path');
const { readFileSync } = require('fs');
const { Service } = require('umi');
const { render: renderTL } = require('@testing-library/react');

exports.generateTmp = async (opts) => {
  const service = new Service({
    cwd: opts.cwd,
    plugins: [require.resolve('./plugin')],
  });
  await service.run({
    name: 'g',
    args: {
      _: ['g', 'tmp'],
    },
  });
};

exports.generateHTML = async (opts) => {
  const service = new Service({
    cwd: opts.cwd,
    plugins: [require.resolve('./plugin')],
  });
  await service.run({
    name: 'g',
    args: {
      _: ['g', 'html'],
    },
  });
};

exports.render = (opts) => {
  return renderTL(require(join(opts.cwd, '.umi-test', 'umi.ts')).default);
};

exports.getHTML = (opts) => {
  return readFileSync(join(opts.cwd, 'dist', 'index.html'), 'utf-8');
};
