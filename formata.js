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
    var loopArray = function(args){
      for(var k in args) s = s.replace('{'+ (Number(k)+1) +'}', args[k])
    };
    if(args.length === 1 && args[0].constructor !== String){
      var args = args[0],
          t = args.constructor;
      if(t === Object) for(var k in args) s = s.replace('{'+ (k) +'}', args[k]);
      else if(t === Array) loopArray(args);
    } else loopArray(args);
    return s;
  };
  String.prototype.format = format;
  context.exports = format;
})(module);
