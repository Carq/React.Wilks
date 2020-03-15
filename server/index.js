/* eslint consistent-return:0 */

const express = require('express');
const fs = require('fs');

const isDev = process.env.NODE_ENV !== 'production';

const { resolve } = require('path');
const https = require('https');
const http = require('http');
const setup = require('./middlewares/frontendMiddleware');
const logger = require('./util//logger');

const argv = require('./util/argv');

const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const privateKey = fs.readFileSync(
  resolve(process.cwd(), 'server/certs/localhost-key.pem'),
  'utf8',
);
const certificate = fs.readFileSync(
  resolve(process.cwd(), 'server/certs/localhost.pem'),
  'utf8',
);

const credentials = { key: privateKey, cert: certificate };

// Start your app.
const httpsServer = https.createServer(credentials, app);
const httpServer = http.createServer(app);

const run = (server, isSsl) => {
  const port = isSsl ? 4000 : 3000;
  server.listen(port, host, async err => {
    if (err) {
      return logger.error(err.message);
    }
  });

  logger.appStarted(port, host || 'localhost');
};

run(httpsServer, true);
run(httpServer, false);
