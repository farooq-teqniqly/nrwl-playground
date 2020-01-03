module.exports = {
  name: 'routing-example',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/routing-example',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
