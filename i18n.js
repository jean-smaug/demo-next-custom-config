const path = require("path")
const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    localePath: typeof window === "undefined" ? "public/locales" : "locales",
    localeSubpaths: {
        fr: "fr",
        en: "en"
    },
    defaultLanguage: 'fr',
    otherLanguages: ['en']
})
