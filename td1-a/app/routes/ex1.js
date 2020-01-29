import Route from '@ember/routing/route';
import Note from 'td1/app/utils/note-class';

export default Route.extend({
    model(){
        //return Note.create();
       return {nom:'Donald Trump', details:'Détails du client Trump ...'};
    }
});
