const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')
const nextI18NextMiddleware = require('next-i18next/middleware').default

const nextI18next = require('./config/i18n')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = "8081";

(async () => {
    await app.prepare()
    const server = express()
  
    server.use(nextI18NextMiddleware(nextI18next))
  
    server.get("/about", (req, res) => app.render(req, res, "/custom-about"))

    server.get('*', (req, res) => handle(req, res))
  
    await server.listen(port)
    console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()
