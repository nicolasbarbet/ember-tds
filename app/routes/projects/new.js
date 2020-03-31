import EmberObject from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return EmberObject.create(
      {
        nouveauprojet : EmberObject.create(),
        dev : this.get('store').findAll('developer')
      }
  );},
  actions : {
    save : function (projet) {
      let store = this.get('store');
      let projetStore = store.createRecord('project', projet);
      projetStore.save().then(() => this.transitionTo('projects'));
    }
  }
});