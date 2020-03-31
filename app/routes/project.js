import Route from '@ember/routing/route';

export default Route.extend({
  model(projet){
    return this.get('store').find('project', projet.project_id);
  }
});