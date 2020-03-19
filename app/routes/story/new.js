import Route from '@ember/routing/route';
//import $ from 'jQuery';
import Ember from 'ember';
//import { next } from '@ember/runloop'
import EmberObject from '@ember/object';

export default Route.extend({
    //...
    model() {
      return EmberObject.create();
    },
    actions:{
      didTransition() {
        Ember.$.next(this, 'initUI');
      },
      //...
      initUI() {
        Ember.$('.ui.dropdown').dropdown();
      }
    }
  }
);