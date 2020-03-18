
module.exports = (api) => {
  api.describe({
    key: 'testUtils',
  });

  api.modifyConfig(memo => {
    memo.history = {
      type: 'memory',
      options: {
        initialEntries: ['/'],
      },
    };
    memo.mountElementId = '';
    return memo;
  });
};
