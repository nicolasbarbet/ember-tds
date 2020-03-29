import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
      delete:function (dev) {
        dev.deleteRecord();
        dev.save();
        this.transitionTo('developers');
      }
    }
  });