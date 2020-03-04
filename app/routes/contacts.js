import Route from '@ember/routing/route';
import Contacts from 'td3/utils/contact-class';



export default Route.extend({
  /*
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
  }
})

/*
export default Route.extend({
    model(){
        let storedContacts = this.get('store').findAll('contact');
        return Contact.create(storedContacts)
    },

    action:{
        delete(contact){

        },
        cancelDeletion(deleteds){

        },
        save(contact){
            let self=this;
            contact.save().then(function(){
                self.transitionTo('contacts');
            });
        }
    },

});
 */
