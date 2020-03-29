import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('developers', function() {
    this.route('new');
    this.route('edit', { path: 'edit/:id' });
    this.route('delete', { path: 'delete/:id' });
  });
  this.route('projects', function() {
    this.route('new');
  });
  this.route('project');

  this.route('', function() {
    this.route('story', function() {
      this.route('new');
    });
  });
});
