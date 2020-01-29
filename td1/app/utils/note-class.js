// note-class.js
import EmberObject, { computed } from '@ember/object';
 
export default EmberObject.extend({
    MAX:100,
    content: "Entrez un texte",
    info: '',
    size : computed('content', function(){
      let content = this.get('content');
      let MAX = this.get('MAX');
      return MAX - content.length;
    }),
    style : computed('size', function(){
      let size = this.get('size');
      if(size < 20)
        return "alert alert-danger";
      if(size < 50)
        return "alert alert-warning";
      else
        return "alert alert-info"
    }),
    alertVisible : computed('info', function(){
      let info = this.get('info');
      return info != "";
    })
});