const context = require.context('../test', false, /\.jsx?$/);
context.keys().forEach(context);