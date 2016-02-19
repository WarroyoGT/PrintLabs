Template.file.events({
    'click [name=delete]': function(ev) {
        ev.preventDefault();
        Files.remove(this._id);
    },
    'click [name=abort]': function(ev) {
        ev.preventDefault();
        workers[this._id].abort();
    },
    'click [name=stop]': function(ev) {
        ev.preventDefault();
        workers[this._id].stop();
    },
    'click [name=start]': function(ev) {
        ev.preventDefault();
        workers[this._id].start();
    }
});

Template.file.helpers({
    formatSize: function(bytes) {
        if (bytes >= 1000000000) {
            return Math.round(bytes / 1000000000) + ' GB';
        }
        if (bytes >= 1000000) {
            return Math.round(bytes / 1000000) + ' MB';
        }
        if (bytes >= 1000) {
            return Math.round(bytes / 1000) + ' KB';
        }
        return bytes + ' B';
    },
    thumb: function() {
        return Thumbs64.findOne({
            originalId: this._id
        });
    }
});
