// import my controller if i'm going to use its methods here
const controller = require('../controllers/controller');

// our routes is a function that accepts the express application as a parameter
module.exports = app => {
    // C
    app.post('/api/coffee', controller.createCoffee)
    // R
    app.get('/api/coffee', controller.getAllCoffee)
    app.get('/api/coffee/:id', controller.getOneCoffee)
    // U
    app.put('/api/coffee/:id', controller.updateCoffee)
    // D
    app.delete('/api/coffee/:id', controller.deleteCoffee)
}