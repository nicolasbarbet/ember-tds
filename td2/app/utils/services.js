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
      let dispoItems = this.get('dispoItems');
      let tab = [];
      dispoItems.forEach(function (item) {
          if(ids.includes(item.id)){
            tab.push(item);
          }
      });
      return tab;
    }),
    includedItems_: computed("includedItemsIds_.[]", function(){
        let ids = this.get('includedItemsIds_');
        let includedItems = this.get('includedItems');
        let tab = [];
        includedItems.forEach(function (item) {
          if(ids.includes(item.id)){
            tab.push(item);
          }
        });
        return tab;
    })
});
