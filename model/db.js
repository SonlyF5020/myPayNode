var settings = require('../settings');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;

if(process.env.VCAP_SERVICES){
    var env = JSON.parse(process.env.VCAP_SERVICES);
    var mongo = env['mongodb-1.8'][0]['credentials'];
}
else{
    var mongo = {
        "hostname":"localhost",
        "port":27017,
        "username":"",
        "password":"",
        "name":"",
        "db":"db"
    }
}
var generate_mongo_url = function(obj){
    obj.hostname = (obj.hostname || 'localhost');
    obj.port = (obj.port || 27017);
    obj.db = (obj.db || 'test');
    if(obj.username && obj.password){
        return{
            username: obj.username,
            password: obj.password,
            hostname: obj.hostname,
            port: obj.port,
            database: obj.db
        };
    }
    else{
        return {
            username: obj.username,
            password: obj.password,
            hostname: obj.hostname,
            port: obj.port,
            database: obj.db,
        };
    }
}
var mongourl = generate_mongo_url(mongo);

module.exports = new Db(mongourl.database, new Server(mongourl.hostname, mongourl.port, {}));
