Npm.depends({
  'node-gcm': "0.9.6"
});

Package.describe({
  summary: "Use Node-GCM package"
});
Package.describe({
  name: 'pauli:node-gcm',
  summary: "Use Node-GCM package",
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});


Package.on_use(function (api) {
  api.add_files('lib.js', 'server');
	api.export('GCM', 'server');
});
