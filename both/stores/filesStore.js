FilesStore = new UploadFS.store.Local({
    collection: Files,
    name: 'files',
    path: '/uploads/files',
    mode: '0777',
    writeMode: '0777'
    /*,
    copyTo: [
        new UploadFS.store.Local({
            collection: Thumbs64,
            name: 'thumbs64',
            path: '/uploads/thumbs_64',
            filter: new UploadFS.Filter({
                extensions: ['gif', 'jpg', 'png']
            }),
            transformWrite: function (from, to, fileId, file) {
                // Resize images
                if (file.type.indexOf('image/') === 0) {
                    var gm = Npm.require('gm');
                    if (gm) {
                        gm(from)
                            .resize(64, 64)
                            .gravity('Center')
                            .extent(64, 64)
                            .quality(75)
                            .stream().pipe(to);
                    } else {
                        from.pipe(to);
                    }
                    //from.pipe(to);
                } else {
                    from.pipe(to);
                }
            },
            copyTo: [
                new UploadFS.store.Local({
                    collection: Thumbs24,
                    name: 'thumbs24',
                    path: '/uploads/thumbs_24',
                    filter: new UploadFS.Filter({
                        extensions: ['gif', 'jpg', 'png']
                    }),
                    transformWrite: function (from, to, fileId, file) {
                        // Resize images
                        if (file.type.indexOf('image/') === 0) {
                            var gm = Npm.require('gm');
                            if (gm) {
                                gm(from)
                                    .resize(24, 24)
                                    .gravity('Center')
                                    .extent(24, 24)
                                    .quality(75)
                                    .stream().pipe(to);
                            } else {
                                from.pipe(to);
                            }
                            //form.pipe(to);
                        } else {
                            from.pipe(to);
                        }
                    }
                })
            ]
        }),
        new UploadFS.store.Local({
            collection: Thumbs48,
            name: 'thumbs48',
            path: '/uploads/thumbs_48',
            transformWrite: function (from, to, fileId, file) {
                // Resize images
                if (file.type.indexOf('image/') === 0) {
                    var gm = Npm.require('gm');
                    if (gm) {
                        gm(from)
                            .resize(48, 48)
                            .gravity('Center')
                            .extent(48, 48)
                            .quality(75)
                            .stream().pipe(to);
                    } else {
                        from.pipe(to);
                    }
                    //from.pipe(to);
                } else {
                    from.pipe(to);
                }
            }
        })
    ]*/
});
