'use strict';

module.exports = {
  auth: {
    mode: 'try'
  },
  handler: function(response, reply) {
    reply.view('templates/users/login');
  }
};
