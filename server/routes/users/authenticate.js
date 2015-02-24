'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  validate: {
    payload: {
      email: Joi.string().email(),
      password: Joi.string().min(3)
    }
  },
  auth: false,
  handler: function(request, reply) {
    User.authenticate(request.payload, function(err, user) {
      if (err) {
        reply.redirect('/login');
      } else {
        request.auth.session.set(user);
        reply.redirect('/');
      }
    });
  }
};
