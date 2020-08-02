const NodeCache = require( "node-cache" );
var nodeCache;
var map = {};

const newNodeCache = (options)=>{
    nodeCache =  new NodeCache(options);
    return nodeCache;
}

const set = (key, ttl, fn)=>{
    map.key = {fn,ttl};
    nodeCache.set( key, fn(), ttl )
}

const get = (key)=>{
    value = nodeCache.get( key );
    if ( value == undefined ){
        console.log(`reseting key ${key}`)
        map.key && nodeCache.set( key, map.key.fn(), map.key.ttl )
        value = nodeCache.get( key );
    }
    return value;
}

module.exports = {
    newNodeCache,set,get
}