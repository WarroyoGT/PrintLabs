UploadFS.config.simulateWriteDelay = 500;
Template.upload.events({
    'click [name=upload]': function(ev, tpl) {
        ev.preventDefault();

        var callback = function(ev) {
            UploadFS.readAsArrayBuffer(ev, function(data, file) {
                var uploader = new UploadFS.Uploader({
                    data: data,
                    file: file,
                    store: FilesStore
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
