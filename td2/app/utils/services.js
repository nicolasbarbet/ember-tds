// services.js
import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
    step : true,
    dispoItems : [],
    includedItems: [],
    dispoItemsIds_ : [],
    includedItemsIds_ : [],
    dispoItems_ : computed('dispoItemsIds_.[]', function(){
      let ids = this.get('dispoItemsIds_');
      console.log(ids);
      let dispoItems = this.get('dispoItems');
      let tab = dispoItems.filter(elt => dispoItems.id = "1");
      return tab;
    }),
    includedItems_: computed("includedItemsIds_.[]", function(){
        let ids = this.get('includedItemsIds_.[]');
        return ids;
    })
});
