import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return Services.create({
            dispoItems : [],
            includedItems : [],
            includedDispoItemsIDS_ : [],
            dispoItemsIDS_ : []
        })
    }
});
