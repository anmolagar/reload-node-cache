var {get,set, newNodeCache}  = require('./index');

newNodeCache({ stdTTL: 1})
var r = 1;
set("a", 1, function(){
    console.log(`function executed with r as ${r}`)
    return ++r;
})

console.log(get("a"))

setTimeout(function(){
    console.log(get("a"))
},2000)