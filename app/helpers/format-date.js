import Ember from 'ember';

Ember.Handlebars.registerBoundHelper()

Ember.Handlebars.registerBoundHelper('format-date', function(format) {
  return moment().format(format);
});