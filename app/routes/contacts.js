import Route from '@ember/routing/route';
import Contacts from 'td3/utils/contact-class';



export default Route.extend({
  /* EXEMPLE AVEC MARTIN
  model(){
    let store=this.get('store');
    let contact=store.createRecord('contact', {
      nom : "MARTIN",
      prenom : "Paul"
    });
    contact.save();
    return store.findAll('contact');
  }
  */

  model(){
    let storedContacts = this.get('store').findAll('contact');
    return Contacts.create(storedContacts);
  },

  actions:{
    save:function (datas) {
      let store = this.get('store');
      let contact = store.createRecord('contact',datas);
      contact.save().then(()=>this.transitionTo('contacts'));
    },
    delete(contact){

    },
    cancelDeletion(deleteds){

    }
  }
})
