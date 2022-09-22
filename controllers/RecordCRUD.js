'use strict';

var utils = require('../utils/writer.js');
var RecordCRUD = require('../service/RecordCRUDService');

module.exports.bulkDeleteRecords = function bulkDeleteRecords (req, res, next, realmId, storageId, filter, supportedFeatures) {
  RecordCRUD.bulkDeleteRecords(realmId, storageId, filter, supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createOrModifyRecord = function createOrModifyRecord (req, res, next, body, getPrevious, supportedFeatures, realmId, storageId, recordId, ifNoneMatch, ifMatch) {
  RecordCRUD.createOrModifyRecord(body, getPrevious, supportedFeatures, realmId, storageId, recordId, ifNoneMatch, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteRecord = function deleteRecord (req, res, next, realmId, storageId, recordId, ifMatch, getPrevious, supportedFeatures) {
  RecordCRUD.deleteRecord(realmId, storageId, recordId, ifMatch, getPrevious, supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMeta = function getMeta (req, res, next, realmId, storageId, recordId, ifNoneMatch, ifModifiedSince, supportedFeatures) {
  RecordCRUD.getMeta(realmId, storageId, recordId, ifNoneMatch, ifModifiedSince, supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRecord = function getRecord (req, res, next, realmId, storageId, recordId, ifNoneMatch, ifModifiedSince, supportedFeatures) {
  RecordCRUD.getRecord(realmId, storageId, recordId, ifNoneMatch, ifModifiedSince, supportedFeatures)
    .then(function (response) {
      var response = '{   "supportedFeatures": "supportedFeatures",   "references": [     "references",     "references"   ],   "matchingRecords": {     "key": "{\"meta\": { \"tags\" : {\"tag1\" : [\"value1\"], \"tag2\" :[\"value2\"] } }, \"blocks\": [{\"Content-Id\": \"userDefBinaryBlob\", \"Content-Type\": \"text/plain\", \"content\": \"QmxvY2sgY29udGVudA==\"}, {\"Content-Id\": \"userDefJsonBlob\", \"Content-Type\": \"application/json\", \"content\": \"{\"key\": \"ftsimpletype-999550000000002\", \"value\": \"A3E71A78377179B5B91A;imsi-999550000000123\"}]}"   },   "count": 0 }';
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchRecord = function searchRecord (req, res, next, realmId, storageId, limitRange, filter, countIndicator, supportedFeatures, retrieveRecords, maxPayloadSize) {
  RecordCRUD.searchRecord(realmId, storageId, limitRange, filter, countIndicator, supportedFeatures, retrieveRecords, maxPayloadSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMeta = function updateMeta (req, res, next, body, supportedFeatures, realmId, storageId, recordId, ifMatch) {
  RecordCRUD.updateMeta(body, supportedFeatures, realmId, storageId, recordId, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
