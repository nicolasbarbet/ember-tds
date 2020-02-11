import Controller from '@ember/controller';

export default Controller.extend({
    actions:{

        addToIncluded(model){
            let dispoItems_ = model.get("dispoItems_");
            let includedItems =  model.get("includedItems");
            let dispoItems = model.get("dispoItems");

            dispoItems_.forEach(function (item) {
                if(!includedItems.includes(item))
                  includedItems.pushObject(item);
            });

            //On retire les items présents dans dispoItems_
            dispoItems = dispoItems.filter(item => !dispoItems_.includes(item));
            model.set("dispoItems", dispoItems);
            //console.log(dispoItems);
        },

        addAllToIncluded(model){
            let dispoItems =  model.get("dispoItems");
            let includedItems =  model.get("includedItems");

            dispoItems.forEach(function (item) {
                includedItems.pushObject(item);
            });
            model.dispoItems.clear();//On vide tout le tableau
        },

        removeFromIncluded(model){
          let includedItems_ = model.get("includedItems_");
          let includedItems =  model.get("includedItems");
          let dispoItems = model.get("dispoItems");

          includedItems_.forEach(function (item) {
            if(!dispoItems.includes(item))
              dispoItems.pushObject(item);
          });

          //On retire les items présents dans dispoItems_
          includedItems = includedItems.filter(item => !includedItems_.includes(item));
          model.set("includedItems", includedItems);
          //console.log(dispoItems);
        },

        RemoveAllFromIncluded(model){
            let includedItems =  model.get("includedItems");
            let dispoItems =  model.get("dispoItems");
            includedItems.forEach(function (item) {
                dispoItems.pushObject(item);
            });
            model.includedItems.clear();//On vide tout le tableau
        },

        toggleStep(model) {
            model.toggleProperty('step');
        }
    }
});
