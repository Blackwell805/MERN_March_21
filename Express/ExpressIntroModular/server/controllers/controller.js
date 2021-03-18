const FakeThing = require('../models/model');

module.exports = {
    createThing: (req,res) => {
        res.json(req.body);
    },
    getThing: (req,res) => {
        let newThingIFaked = new FakeThing();

        res.json(newThingIFaked);
    },
    deleteThing: (req, res) => {
        let deletedId = req.params.id;

        res.json({ message: `Deleted the item with id: ${deletedId}`});
    }
}