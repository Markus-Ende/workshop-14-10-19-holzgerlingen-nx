module.exports = {
  name: 'pow',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pow',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
