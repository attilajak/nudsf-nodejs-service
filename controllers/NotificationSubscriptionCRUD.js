'use strict';

var utils = require('../utils/writer.js');
var NotificationSubscriptionCRUD = require('../service/NotificationSubscriptionCRUDService');

module.exports.createAndUpdateNotificationSubscription = function createAndUpdateNotificationSubscription (req, res, next, body, supportedFeatures, realmId, storageId, subscriptionId, ifNoneMatch, ifMatch) {
  NotificationSubscriptionCRUD.createAndUpdateNotificationSubscription(body, supportedFeatures, realmId, storageId, subscriptionId, ifNoneMatch, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteNotificationSubscription = function deleteNotificationSubscription (req, res, next, realmId, storageId, subscriptionId, clientId, getPrevious, ifMatch, supportedFeatures) {
  NotificationSubscriptionCRUD.deleteNotificationSubscription(realmId, storageId, subscriptionId, clientId, getPrevious, ifMatch, supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNotificationSubscription = function getNotificationSubscription (req, res, next, realmId, storageId, subscriptionId, supportedFeatures, ifNoneMatch, ifModifiedSince) {
  NotificationSubscriptionCRUD.getNotificationSubscription(realmId, storageId, subscriptionId, supportedFeatures, ifNoneMatch, ifModifiedSince)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateNotificationSubscription = function updateNotificationSubscription (req, res, next, body, supportedFeatures, realmId, storageId, subscriptionId, ifMatch) {
  NotificationSubscriptionCRUD.updateNotificationSubscription(body, supportedFeatures, realmId, storageId, subscriptionId, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
