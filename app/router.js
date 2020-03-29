import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('/');
  this.route('developers', function() {
    this.route('new');
    this.route('edit', { path: 'edit/:id' });
    this.route('delete', { path: 'delete/:id' });
  });
  this.route('projects', function() {
    this.route('new');
    this.route('edit', { path: '/delete/:project_id' });
    this.route('delete', { path: '/delete/:project_id' });
  });
  this.route('project', {path: '/project/:project_id'});

  this.route('story', function() {
    this.route('new');
  });
});
