var zalando = require('./zalando');
//zalando.init_cache();

// Print some cached items
var cache = require('./cached.json');
console.log(cache['filter-top']);
console.log(cache['filter-bottom']);
console.log(cache['filter-shoes']);


