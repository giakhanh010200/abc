//Polyfill (tạo function để chương trình 
// chạy được trên  các trình duyệt cũ)

if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      'use strict';
  
      if (search instanceof RegExp) {
        throw TypeError('first argument must not be a RegExp');
      }
      if (start === undefined) { start = 0; }
      return this.indexOf(search, start) !== -1;
    };
  }


console.log(  'JavaScript course'.includes('JavaScript', 0));

 