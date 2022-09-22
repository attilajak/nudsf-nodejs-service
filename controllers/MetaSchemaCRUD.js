'use strict';

var utils = require('../utils/writer.js');
var MetaSchemaCRUD = require('../service/MetaSchemaCRUDService');

module.exports.createOrModifyMetaSchema = function createOrModifyMetaSchema (req, res, next, body, getPrevious, supportedFeatures, realmId, storageId, schemaId, ifNoneMatch, ifMatch) {
  MetaSchemaCRUD.createOrModifyMetaSchema(body, getPrevious, supportedFeatures, realmId, storageId, schemaId, ifNoneMatch, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMetaSchema = function deleteMetaSchema (req, res, next, realmId, storageId, schemaId, ifMatch, getPrevious, supportedFeatures) {
  MetaSchemaCRUD.deleteMetaSchema(realmId, storageId, schemaId, ifMatch, getPrevious, supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMetaSchema = function getMetaSchema (req, res, next, realmId, storageId, schemaId, ifNoneMatch, ifModifiedSince, supportedFeatures) {
  MetaSchemaCRUD.getMetaSchema(realmId, storageId, schemaId, ifNoneMatch, ifModifiedSince, supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
