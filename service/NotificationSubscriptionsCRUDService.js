'use strict';


/**
 * Notification subscription retrieval
 * retrieve all notification subscriptions of the storage
 *
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * limitRange Integer The maximum number of NotificationSubscriptions to fetch (optional)
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * returns List
 **/
exports.getNotificationSubscriptions = function(realmId,storageId,limitRange,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "clientId" : {
    "nfId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "nfSetId" : "nfSetId"
  },
  "supportedFeatures" : "supportedFeatures",
  "callbackReference" : "callbackReference",
  "expiryCallbackReference" : "expiryCallbackReference",
  "expiry" : "2000-01-23T04:56:07.000+00:00",
  "expiryNotification" : 0,
  "subFilter" : {
    "operations" : [ "", "", "" ],
    "monitoredResourceUris" : [ "monitoredResourceUris", "monitoredResourceUris" ]
  }
}, {
  "clientId" : {
    "nfId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "nfSetId" : "nfSetId"
  },
  "supportedFeatures" : "supportedFeatures",
  "callbackReference" : "callbackReference",
  "expiryCallbackReference" : "expiryCallbackReference",
  "expiry" : "2000-01-23T04:56:07.000+00:00",
  "expiryNotification" : 0,
  "subFilter" : {
    "operations" : [ "", "", "" ],
    "monitoredResourceUris" : [ "monitoredResourceUris", "monitoredResourceUris" ]
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

