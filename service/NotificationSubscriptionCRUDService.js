'use strict';


/**
 * NotificationSubscription Create/Update
 *
 * body NotificationSubscription 
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * subscriptionId String Identifier of the NotificationSubscription
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifMatch String Record validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * returns NotificationSubscription
 **/
exports.createAndUpdateNotificationSubscription = function(body,supportedFeatures,realmId,storageId,subscriptionId,ifNoneMatch,ifMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Notification Subscription of the storage
 * delete a single subscriptions of the storage
 *
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * subscriptionId String Identifier of the NotificationSubscription
 * clientId ClientId Identifies the NF or NFSet
 * getPrevious Boolean Retrieve the NotificationSubscription before delete (optional)
 * ifMatch String Record validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * returns List
 **/
exports.deleteNotificationSubscription = function(realmId,storageId,subscriptionId,clientId,getPrevious,ifMatch,supportedFeatures) {
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


/**
 * Notification subscription retrieval
 * retrieve a single notification subscription of the storage
 *
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * subscriptionId String Identifier of the NotificationSubscription
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifModifiedSince String Validator for conditional requests, as described in RFC 7232, 3.3 (optional)
 * returns NotificationSubscription
 **/
exports.getNotificationSubscription = function(realmId,storageId,subscriptionId,supportedFeatures,ifNoneMatch,ifModifiedSince) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * NotificationSubscription update
 * update a specific NotificationSubscription
 *
 * body List data to patch
 * supportedFeatures String Features required to be supported by the target NF (optional)
 * realmId String Identifier of the Realm
 * storageId String Identifier of the Storage
 * subscriptionId String Identifier of the NotificationSubscription
 * ifMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * returns inline_response_200
 **/
exports.updateNotificationSubscription = function(body,supportedFeatures,realmId,storageId,subscriptionId,ifMatch) {
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

