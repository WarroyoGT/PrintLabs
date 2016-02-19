Meteor.publishComposite("files", function() {
  return {
    find: function() {
      return Files.find({});
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
