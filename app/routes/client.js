import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return {nom:'Donald Trump', details:'Détails du client Trump ...'};
    }
});
