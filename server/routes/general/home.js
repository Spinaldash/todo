'use strict';

module.exports = {
  auth: {
    mode: 'try'
  },
  handler: function(request, reply) {
    reply.view('templates/general/home', request.auth.credentials);
  }
};
