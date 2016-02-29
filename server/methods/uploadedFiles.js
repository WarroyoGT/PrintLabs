Meteor.methods({
  'UploadedFiles.insert': function (params) {
    UploadedFiles.insert(params);
  },
  'UploadedFiles.remove': function (params) {
    UploadedFiles.remove(params);
  }
});
