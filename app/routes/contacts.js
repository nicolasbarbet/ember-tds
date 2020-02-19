import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return Services.create({
            dispoItems : items,
            includedItems : [],
            includedItemsIds_ : [],
            dispoItemsIds_ : []
        })
    },

    action:{
        delete(contact){

        },
        cancelDeletion(deleteds){

        },
        save(contact){
            let selft=this;
            contact.save().then(function(){
                self.transitionTo('contacts');
            });
        }
    },

});
