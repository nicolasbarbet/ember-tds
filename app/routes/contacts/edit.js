import Route from '@ember/routing/route';
import Contact from 'td3/utils/contact-class';


export default Route.extend({
  model(){
    return Contact.create({

    })
  },
  actions:{
    editContact(datas){

    }
  }
});
