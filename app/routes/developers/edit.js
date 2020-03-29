import Route from '@ember/routing/route';

export default Route.extend({
    actions : {
      save:function(developer){
        developer.save().then(() =>  this.transitionTo('developers'));
      }
    }
  });