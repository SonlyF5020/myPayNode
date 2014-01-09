var mongodb = require("./db");
function USER() {
}

module.exports = USER;

USER.prototype.getByName = function (name, callback) {
    mongodb.open(function (err, db) {
        if (err) {
            return callback(err);
        }
        db.collection("users", function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            collection.find({name: name}).toArray(function (err, docs) {
                mongodb.close();
                if (err) {
                    callback(err);
                }
                callback(null, docs);
            });
        });
    });
};
