const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')
const nextI18NextMiddleware = require('next-i18next/middleware').default

const morgan = require("morgan")

const nextI18next = require('./i18n')

const { NODE_ENV } = process.env
const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = "8081";

(async () => {
    await app.prepare()
    const server = express()

    // if(NODE_ENV === "development") {
    //     server.use(morgan("dev"))
    // }

    server.use(nextI18NextMiddleware(nextI18next))

    server.get("/profile/:id", (req, res) => app.render(req, res, "/profile", { userId: req.params.id }))

    server.get("/about", (req, res) => app.render(req, res, "/custom-about"))

    server.get('*', (req, res) => handle(req, res))

    await server.listen(port)
    console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()
