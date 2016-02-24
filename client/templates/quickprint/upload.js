UploadFS.config.simulateWriteDelay = 500;
Template.upload.events({
    'click [name=upload]': function(ev, tpl) {
        ev.preventDefault();

        var callback = function(ev) {
            UploadFS.readAsArrayBuffer(ev, function(data, file) {
                var uploader = new UploadFS.Uploader({
                    data: data,
                    file: file,
                    store: FilesStore,
                    onError: function(err) {
                        console.error(err);
                    },
                    onAbort: function(file) {
                        console.log(file.name + ' upload has been aborted');
                    },
                    onComplete: function(file) {
                        console.log(file.name + ' has been uploaded');
                    },
                    onCreate: function(file) {
                        console.log(file.name + ' has been created with ID ' + file._id);
                    },
                    onProgress: function(file, progress) {
                        console.log(file.name + ' ' + (progress * 100) + '% uploaded');
                    },
                    onStart: function(file) {
                        console.log(file.name + ' started');
                    },
                    onStop: function(file) {
                        console.log(file.name + ' stopped');
                    }
                });

                // Remove uploader on complete
                uploader.onComplete = function() {
                    delete workers[file.name];
                };
                // Remember uploader
                tpl.autorun(function() {
                    uploader.getProgress();
                    if (uploader.getFile()._id) {
                        workers[uploader.getFile()._id] = uploader;
                    }
                });
                uploader.start();
            });
        };

        var input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.onchange = callback;
        input.click();
    }
});


Template.upload.helpers({
    files: function() {
        return Files.find({}, {
            sort: {
                createdAt: 1,
                name: 1
            }
        });
    }
});
Template.upload.rendered = function() {

};
