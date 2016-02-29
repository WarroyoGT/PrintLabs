Meteor.publishComposite("UploadedFiles", function() {
  return {
    find: function() {
      return UploadedFiles.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
