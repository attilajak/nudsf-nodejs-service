'use strict';


/**
 * Create/Modify Meta Schema
 * Create or Modify a Meta Schema with a user provided SchemaId
 *
 * body MetaSchema 
 * getPrevious Boolean Retrieve the Meta Schema before update (optional)
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * realmId String Identifier(name) of the Realm
 * storageId String Identifier of the Storage
 * schemaId SchemaId Identifier of the Meta Schema
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * returns MetaSchema
 **/
exports.createOrModifyMetaSchema = function(body,getPrevious,supportedFeatures,realmId,storageId,schemaId,ifNoneMatch,ifMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "schemaId" : "schemaId",
  "metaTags" : [ {
    "sort" : false,
    "tagName" : "tagName",
    "keyType" : "",
    "presence" : true
  }, {
    "sort" : false,
    "tagName" : "tagName",
    "keyType" : "",
    "presence" : true
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Meta Schema with an user provided SchemaId
 *
 * realmId String Identifier(name) of the Realm
 * storageId String Identifier of the Storage
 * schemaId SchemaId Identifier of the Meta Schema
 * ifMatch String Record validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * getPrevious Boolean Retrieve the Meta Schema before delete (optional)
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * returns MetaSchema
 **/
exports.deleteMetaSchema = function(realmId,storageId,schemaId,ifMatch,getPrevious,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "schemaId" : "schemaId",
  "metaTags" : [ {
    "sort" : false,
    "tagName" : "tagName",
    "keyType" : "",
    "presence" : true
  }, {
    "sort" : false,
    "tagName" : "tagName",
    "keyType" : "",
    "presence" : true
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Meta Schema access
 * retrieve one specific Meta Schema
 *
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * schemaId SchemaId Identifier of the Meta Schema
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifModifiedSince String Validator for conditional requests, as described in RFC 7232, 3.3 (optional)
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * returns Record
 **/
exports.getMetaSchema = function(realmId,storageId,schemaId,ifNoneMatch,ifModifiedSince,supportedFeatures) {
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

