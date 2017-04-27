/*
  Jens Hjalmarsson
  jens.hjalmarsson@gmail.com
*/
(function(context){
  'use strict';
  /*
    Format a string with placeholders.
    @arguments (mixed) replacement arguments
    @return (string) modified string
  */
  var format = function(){
    var s = '', type = typeof this, args = Array.prototype.slice.call(arguments);
    if(type == 'string') s = this.toString();
    else if(args.length > 0) s = args.shift();
    if(args.length === 1 && typeof args[0] == 'object') args = args[0];
    for(var k in args) s = s.split('{'+ ((args.constructor === Array) ? Number(k)+1 : k) +'}').join(args[k]);
    return s;
  };

  if(!String.prototype.format){
    String.prototype.format = format;
  }

  context.exports = format;
})(module);
