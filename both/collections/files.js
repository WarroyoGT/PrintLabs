Files = new Mongo.Collection('files');


Files.helpers({

});
/*
Files.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
*/
