'use strict';

const JsonDatabase = require('./lib/JsonDatabase');
const JsonCollection = require('./lib/JsonCollection');



function VirusDB(config) { return new JsonDatabase(config); }

VirusDB.JsonCollection = JsonCollection;
VirusDB.JsonDatabase = JsonDatabase;

module.exports = VirusDB;