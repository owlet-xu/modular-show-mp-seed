module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [        // element官方教程
    [
      'component',
      {
        'libraryName': 'mint-ui',
        "style": true
      }
    ]
  ]
}