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
      if(size < 0)
        return "color:red;";
      return "color:black;";
    }),
    alertVisible : computed('info', function(){
      let info = this.get('info');
      return info != "";
    })
});