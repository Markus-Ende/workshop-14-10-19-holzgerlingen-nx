module.exports = {
  name: 'boom',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/boom',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
