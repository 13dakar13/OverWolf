const path = require('path');

// needed for WebStorm autocomplete works properly
module.exports = {
  resolve: {
    // for WebStorm
    alias: {
      '~': path.resolve(__dirname),
      '@': path.resolve(__dirname),
    },
  },
};
