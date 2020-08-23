"use strict";

// this file connets to the remote prisma db and gives us the ability to query it witn js
var _require = require('prisma-binding'),
    Prisma = _require.Prisma;

var db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});
module.exports = db;