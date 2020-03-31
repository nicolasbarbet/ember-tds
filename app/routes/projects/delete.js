import Route from '@ember/routing/route';

export default Route.extend({
  actions : {
      delete : function (projet) {
        console.log("Projet supprimé !");
        projet.destroyRecord().then(() => this.transitionTo('projects'));
    }
  }
});