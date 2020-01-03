module.exports = {
  name: 'app-shel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/app-shel',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
