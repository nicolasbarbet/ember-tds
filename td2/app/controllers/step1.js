import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        addToIncluded(model){
            let dispoItems_ = model.get("dispoItems_");
            let includedItems =  model.get("includedItems");
            let dispoItems = model.get("dispoItems");

            dispoItems_.forEach(function (item) {
                includedItems.pushObject(item);
                console.log(item);
            });

            dispoItems_.filter(item => item !== dispoItems_)
            console.log(dispoItems_);
        },
        addAllToIncluded(model){
            let dispoItems_ =  model.get("dispoItems_");
            let includedItems =  model.get("includedItems");

            dispoItems_.forEach(function (item) {
                includedItems.pushObject(item);
                console.log(item);
            });
            //model.dispoItems_ = [];
            //model.set('dispoItems_', dispoItems_.splice(0,dispoItems_.length));
            model.dispoItems.clear();
        },
        removeFromIncluded(){

        },
        RemoveAllFromIncluded(model){
            let includedItems =  model.get("includedItems");
            let dispoItems =  model.get("dispoItems");
            includedItems.forEach(function (item) {
                dispoItems.pushObject(item);
                console.log(item);
            });
          model.includedItems.clear();

        },
        toggleStep(model) {
            model.toggleProperty('step');
        }
    }
});
