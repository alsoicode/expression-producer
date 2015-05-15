'use strict';

exports.index = function(req, res, next) {
    res.json(200, {"status": "Still Alive!"});
    next();
};