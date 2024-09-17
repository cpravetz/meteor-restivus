Package.describe({
  name: 'seakaytee:restivus',
  summary: 'Create authenticated REST APIs in Meteor 0.9+ via HTTP/HTTPS. Setup CRUD endpoints for Collections.',
  version: '0.8.14',
  git: 'https://github.com/kahmali/meteor-restivus.git'
});


Package.onUse(function (api) {
  // Minimum Meteor version
  api.versionsFrom(['2.3','3.0']);

  // Meteor dependencies
  api.use('check');
  api.use('coffeescript@2.7.0');
  api.use('underscore');
  api.use('accounts-password');
  api.use('simple:json-routes');

  api.addFiles('lib/auth.coffee', 'server');
  api.addFiles('lib/iron-router-error-to-response.js', 'server');
  api.addFiles('lib/route.coffee', 'server');
  api.addFiles('lib/restivus.coffee', 'server');

  // Exports
  api.export('Restivus', 'server');
});


