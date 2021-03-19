const controller = require('../controllers/controller');
module.exports = app => {
    // C
    app.post('/api/heroes/create', controller.createHero);
    // R
    app.get('/api/heroes', controller.getAllHeroes);
    app.get('/api/heroes/:id', controller.getHeroById);
    // U
    app.put('/api/heroes/:id', controller.updateHero);
    // D
    app.delete('/api/heroes/:id', controller.deleteHero);
}