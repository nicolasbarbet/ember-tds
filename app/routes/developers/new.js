import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return EmberObject.create();
  },
  actions: {
    save: function (dev) {
      let store = this.get('store');
      let developer = store.createRecord('developer', dev);
      developer.save().then(() =>  this.transitionTo('developers'));
      console.log("Developer saved");
    },
    cancel: function () {
        this.transitionTo('developers');
    }
  }
});