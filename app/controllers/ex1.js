import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        save(model){
            model.set('info', model.content);
            console.log(model.info);
        },
        clear(model){
            model.set('content', "");
        }
    }
});
