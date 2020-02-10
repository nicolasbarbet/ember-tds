// services.js
import EmberObject, { computed } from '@ember/object';
 
export default EmberObject.extend({
    step : true,
    dispoItems : [],
    includedItems: [],
    dispoItemsIds_ : [],
    includedItemsIds_ : [],
    dispoItems_ : computed('dispoItemsIds_.[]', function(){
      
    }),
    includedItems_: computed("includedItemsIds_.[]", function(){
        
    })
});