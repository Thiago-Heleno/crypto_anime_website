const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa')

module.exports = withPlugins([
  
  [withPWA, {
    pwa: {
      //disable: process.env.NODE.ENV != 'production',
      dest: 'public',
    },
  }],
  
], {
  reactStrictMode: true,
  images: {
    domains: ["image.imdb.org"]
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
  },
})