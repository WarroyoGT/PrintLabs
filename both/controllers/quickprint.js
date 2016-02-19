QuickPrintController = AppController.extend({
  waitOn: function() {
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
