Package.describe({
  name: 'crapthings:meteor-data-container',
  summary: 'Meteor Data Container',
  version: '0.0.3_1',
  git: 'https://github.com/crapthings/meteor-data-container.git',
})

Package.onUse(function (api) {

  api.versionsFrom('1.3')

  api.use([
    'ecmascript@0.5.8_1',
  ])

  api.use([
    'meteorhacks:subs-manager@1.6.4',
  ])

  api.addFiles([
    'src.js',
  ], ['client'])

  api.export([
    'MeteorDataContainer',
  ])

})
