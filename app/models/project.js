import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    nom : DS.attr('string'),
    description : DS.attr('string'),
    datedebut : DS.attr('utc'),
    datefin : DS.attr('utc'),
    proprietaire : DS.belongsTo('developer')
    //stories : DS.hasMany('story')
});