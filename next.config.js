const css = require('@zeit/next-css')
const sass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    sass,
    css
])
