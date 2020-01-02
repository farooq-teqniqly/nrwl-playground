module.exports = {
  name: 'reading-log',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/reading-log',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
