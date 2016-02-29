QuickPrintController = AppController.extend({
  waitOn: function() {
    this.subscribe('UploadedFiles');
    return this.subscribe('files');
  },
  data: {
    files: Files.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Quick Print');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
