'use strict';

var utils = require('../utils/writer.js');
var NotificationSubscriptionsCRUD = require('../service/NotificationSubscriptionsCRUDService');

module.exports.getNotificationSubscriptions = function getNotificationSubscriptions (req, res, next, realmId, storageId, limitRange, supportedFeatures) {
  NotificationSubscriptionsCRUD.getNotificationSubscriptions(realmId, storageId, limitRange, supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
