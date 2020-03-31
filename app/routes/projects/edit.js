import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model ({project_id}) {
    return RSVP.hash({
      projet : this.get('store').find('project', project_id),
      dev : this.get('store').findAll('developer')
    });
  },
  actions : {
    save : function (projet) {
      projet.save().then(() =>  this.transitionTo('projects'));
    }
  }
});