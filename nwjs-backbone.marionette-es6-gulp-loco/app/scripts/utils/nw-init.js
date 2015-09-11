'use strict';

// For some reason babel polyfill thinks it's already initialized...
delete global._babelPolyfill;

require('babel/polyfill');

// babel/polyfill adds stuff to global so we have to move it to window
Object.keys(global).forEach(key => {
  if (!(key in window)) {
    window[key] = global[key];
  }
});
