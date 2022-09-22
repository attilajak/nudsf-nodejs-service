'use strict';


/**
 * Create or Update a specific Block in a Record.
 * Create or update a specific Block, related to a Record
 *
 * body  information on the Block to create
 * getPrevious Boolean Retrieve the Block before update (optional)
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * recordId String Identifier of the Record
 * blockId String Id of the Block
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifMatch String Record validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * returns Block
 **/
exports.createOrModifyBlock = function(body,getPrevious,supportedFeatures,realmId,storageId,recordId,blockId,ifNoneMatch,ifMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "\"QmxvY2sgY29udGVudA==\"";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a specific Block. Then update the Record
 * delete a specific Block, related to a Record
 *
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * recordId String Identifier of the Record
 * blockId String Id of the Block
 * getPrevious Boolean Retrieve the Block before delete (optional)
 * ifMatch String Record validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * returns Block
 **/
exports.deleteBlock = function(realmId,storageId,recordId,blockId,getPrevious,ifMatch,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "\"QmxvY2sgY29udGVudA==\"";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a specific Block
 * retrieve a specific Block
 *
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * recordId String Identifier of the Record
 * blockId String Id of the Block
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifModifiedSince String Validator for conditional requests, as described in RFC 7232, 3.3 (optional)
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * returns Block
 **/
exports.getBlock = function(realmId,storageId,recordId,blockId,ifNoneMatch,ifModifiedSince,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "\"QmxvY2sgY29udGVudA==\"";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Record's Blocks access
 * retrieve all Blocks of a specific Record
 *
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * recordId String Identifier of the Record
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * returns inline_response_200_1
 **/
exports.getBlockList = function(realmId,storageId,recordId,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blocks" : [ "\"QmxvY2sgY29udGVudA==\"", "\"QmxvY2sgY29udGVudA==\"" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

