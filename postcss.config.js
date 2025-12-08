module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
      },
      autoprefixer: {
        flexbox: 'no-2009',
      },
    }),
  ],
};
