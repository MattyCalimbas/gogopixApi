var db = require('./../controllers/apicontroller.js');

module.exports = function (app) {
    app.get('/subjects', db.getSubjects);
    app.get('/wallpapers', db.getWallpapers);
}