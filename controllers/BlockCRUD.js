'use strict';

var utils = require('../utils/writer.js');
var BlockCRUD = require('../service/BlockCRUDService');

module.exports.createOrModifyBlock = function createOrModifyBlock (req, res, next, body, getPrevious, supportedFeatures, realmId, storageId, recordId, blockId, ifNoneMatch, ifMatch) {
  BlockCRUD.createOrModifyBlock(body, getPrevious, supportedFeatures, realmId, storageId, recordId, blockId, ifNoneMatch, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBlock = function deleteBlock (req, res, next, realmId, storageId, recordId, blockId, getPrevious, ifMatch, supportedFeatures) {
  BlockCRUD.deleteBlock(realmId, storageId, recordId, blockId, getPrevious, ifMatch, supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBlock = function getBlock (req, res, next, realmId, storageId, recordId, blockId, ifNoneMatch, ifModifiedSince, supportedFeatures) {
  BlockCRUD.getBlock(realmId, storageId, recordId, blockId, ifNoneMatch, ifModifiedSince, supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBlockList = function getBlockList (req, res, next, realmId, storageId, recordId, supportedFeatures) {
  BlockCRUD.getBlockList(realmId, storageId, recordId, supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
