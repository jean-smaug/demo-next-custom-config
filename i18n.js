const path = require("path")
const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    localePath: typeof window === "undefined" ? "public/locales" : "locales",
    defaultLanguage: 'fr',
    otherLanguages: ['en']
})
