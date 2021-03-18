const controller = require('../controllers/controller');
module.exports = app => {
    // C
    app.post('/api', controller.createThing);
    // R
    app.get('/api', controller.getThing);
    // U
    // D
    app.delete('/api/:id', controller.deleteThing);
}