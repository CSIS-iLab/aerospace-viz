module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [require('stylelint')]
    }),
    require('postcss-preset-env')({
      autoprefixer: {},
      features: {
        'nesting-rules': true
      },
      cssnano: {
        present: 'default'
      }
    })
  ]
};
