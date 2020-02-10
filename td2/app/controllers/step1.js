import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        addToIncluded(model){
            model.set('info', model.content);
            console.log(model.info);
        },
        addAllToIncluded(model){
            model.set('content', "");
        },
        removeFromIncluded(){

        },
        RemoveAllFromIncluded(){

        },
        toggleStep(model) {
            model.toggleProperty('step');
        }
    }
});
