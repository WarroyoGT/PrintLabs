Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/quickprint',{
  name: 'quickprint',
  controller: 'QuickPrintController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard','quickprint']
});
