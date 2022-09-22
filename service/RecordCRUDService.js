'use strict';


/**
 * Bulk Deletion of Records
 * Delete multiple Records based on filter
 *
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * filter SearchExpression 
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * returns RecordIdList
 **/
exports.bulkDeleteRecords = function(realmId,storageId,filter,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "recordIdList" : [ "recordIdList", "recordIdList" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create/Modify Record
 * Create or Modify a Record with a user provided RecordId
 *
 * body Record The record multipart request body. The meta part shall be the first part and is mandatory but can be empty and zero or more block parts may follow the meta part.
 * getPrevious Boolean Retrieve the Record before update (optional)
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * realmId String Identifier(name) of the Realm
 * storageId String Identifier of the Storage
 * recordId String Identifier of the Record
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifMatch String Record validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * returns Record
 **/
exports.createOrModifyRecord = function(body,getPrevious,supportedFeatures,realmId,storageId,recordId,ifNoneMatch,ifMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"meta\": { \"tags\" : {\"tag1\" : [\"value1\"], \"tag2\" :[\"value2\"] } }, \"blocks\": [{\"Content-Id\": \"userDefBinaryBlob\", \"Content-Type\": \"text/plain\", \"content\": \"QmxvY2sgY29udGVudA==\"}, {\"Content-Id\": \"userDefJsonBlob\", \"Content-Type\": \"application/json\", \"content\": \"{\"key\": \"ftsimpletype-999550000000002\", \"value\": \"A3E71A78377179B5B91A;imsi-999550000000123\"}]}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Record with an user provided RecordId
 *
 * realmId String Identifier(name) of the Realm
 * storageId String Identifier of the Storage
 * recordId String Identifier of the Record
 * ifMatch String Record validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * getPrevious Boolean Retrieve the Record before delete (optional)
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * returns Record
 **/
exports.deleteRecord = function(realmId,storageId,recordId,ifMatch,getPrevious,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"meta\": { \"tags\" : {\"tag1\" : [\"value1\"], \"tag2\" :[\"value2\"] } }, \"blocks\": [{\"Content-Id\": \"userDefBinaryBlob\", \"Content-Type\": \"text/plain\", \"content\": \"QmxvY2sgY29udGVudA==\"}, {\"Content-Id\": \"userDefJsonBlob\", \"Content-Type\": \"application/json\", \"content\": \"{\"key\": \"ftsimpletype-999550000000002\", \"value\": \"A3E71A78377179B5B91A;imsi-999550000000123\"}]}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Record's meta access
 * retrieve meta of a specific Record
 *
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * recordId String Identifier of the Record
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifModifiedSince String Validator for conditional requests, as described in RFC 7232, 3.3 (optional)
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * returns RecordMeta
 **/
exports.getMeta = function(realmId,storageId,recordId,ifNoneMatch,ifModifiedSince,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{ \"tags\" : {\"ueId\" : [ \"455345\", \"455346\" ], \"recordId\" : [ \"1000106\" ] }} schemaId:\n  $ref: '#/components/schemas/SchemaId'";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Record access
 * retrieve one specific Record
 *
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * recordId String Identifier of the Record
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifModifiedSince String Validator for conditional requests, as described in RFC 7232, 3.3 (optional)
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * returns Record
 **/
exports.getRecord = function(realmId,storageId,recordId,ifNoneMatch,ifModifiedSince,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"meta\": { \"tags\" : {\"tag1\" : [\"value1\"], \"tag2\" :[\"value2\"] } }, \"blocks\": [{\"Content-Id\": \"userDefBinaryBlob\", \"Content-Type\": \"text/plain\", \"content\": \"QmxvY2sgY29udGVudA==\"}, {\"Content-Id\": \"userDefJsonBlob\", \"Content-Type\": \"application/json\", \"content\": \"{\"key\": \"ftsimpletype-999550000000002\", \"value\": \"A3E71A78377179B5B91A;imsi-999550000000123\"}]}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Records search with get
 * Retrieve one or multiple Records based on filter
 *
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * limitRange Integer The most number of record references to fetch (optional)
 * filter SearchExpression Query filter using conditions on tags (optional)
 * countIndicator Boolean Indicates whether the number of records that matched the criteria shall be returned. (optional)
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * retrieveRecords RetrieveRecords Indicates whether the UDSF is requested to include matching records within the response. (optional)
 * maxPayloadSize Integer Indicates the number of kilo octets the consumer is prepared to receive (optional)
 * returns RecordSearchResult
 **/
exports.searchRecord = function(realmId,storageId,limitRange,filter,countIndicator,supportedFeatures,retrieveRecords,maxPayloadSize) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "supportedFeatures" : "supportedFeatures",
  "references" : [ "references", "references" ],
  "matchingRecords" : {
    "key" : "{\"meta\": { \"tags\" : {\"tag1\" : [\"value1\"], \"tag2\" :[\"value2\"] } }, \"blocks\": [{\"Content-Id\": \"userDefBinaryBlob\", \"Content-Type\": \"text/plain\", \"content\": \"QmxvY2sgY29udGVudA==\"}, {\"Content-Id\": \"userDefJsonBlob\", \"Content-Type\": \"application/json\", \"content\": \"{\"key\": \"ftsimpletype-999550000000002\", \"value\": \"A3E71A78377179B5B91A;imsi-999550000000123\"}]}"
  },
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Record's meta update
 * update meta of a specific Record
 *
 * body List Meta data to patch
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * recordId String Identifier of the Record
 * ifMatch String Record validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * returns inline_response_200
 **/
exports.updateMeta = function(body,supportedFeatures,realmId,storageId,recordId,ifMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "report" : [ {
    "path" : "path",
    "reason" : "reason"
  }, {
    "path" : "path",
    "reason" : "reason"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

