Router.configure({
  layoutTemplate: 'application_layout'
});

Router.route('/', function () {
  this.render('home_page');
});

Router.route('/logout', function () {
  AccountsTemplates.logout();
  Router.go('/login');
});

Router.route('/subjects', function () {
  this.render('subjects_page');
});

Router.route('/subjects/add', function () {
  this.render('subjects_add_page');
});

Router.route('/subjects/:id', function () {
  var subject = Subjects.findOne({_id: this.params.id});
  this.render('subjects_edit_page', { data: subject });
});

Router.route('/geteoportal', function() {
  this.render('geteoportal_page');
});

Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
}, { only: ['geteoportal', 'geteoportal_page'] });

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/login',
  redirect: '/'
});