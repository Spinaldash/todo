'use strict';

var Item = require('../../models/item');
var User = require('../../models/user');
var _ = require('lodash');
var plusNum = require('../../views/helpers/plusNum');
var moment = require('moment');

module.exports = {
  handler: function(request, reply) {
    request.query.userId = request.auth.credentials._id;
    var limit = 5;
    var skip = request.query.skip || 0;
    var pageNum = 0;
    var sort = request.query.sort;
    var skipMax = 0;
    delete request.query.page;
    delete request.query.limit;
    delete request.query.sort;
    delete request.query.skip;
    Item.count(request.query, function(err, count) {
      pageNum = Math.ceil(count / limit);
    });
    Item.find(request.query).sort(sort).limit(limit).skip(skip).exec(function(err, items) {
      var skipMax = pageNum * limit - 5;
      reply.view('templates/items/index', {items:items, skip:skip, plusNum:plusNum, moment:moment, skipMax:skipMax});
    })
  }
};
