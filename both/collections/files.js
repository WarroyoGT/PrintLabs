//Files = new Mongo.Collection('files');

UploadedFiles = new FS.Collection('UploadedFiles',{
  stores: [new FS.Store.GridFS('UploadedFiles')]
  //stores: [new FS.Store.FileSystem("UploadedFiles", {path: "~/uploads/files"})]
});

Files = new Mongo.Collection('files');

Files.helpers({

});
/*
Files.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
*/
