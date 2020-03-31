import Model from '@ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    identity: DS.attr('string'),
    projects: DS.hasMany('project')
});
