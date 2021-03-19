const SuperHero = require('../models/superhero.model');

module.exports = {
    // C
    createHero: (req,res) => {
        // MONGO QUERY: db.collection.insert({ object you want to insert })
        // MONGOOSE QUERY:
        SuperHero.create(req.body)
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }))
    },
    // R
    getAllHeroes: (req,res) => {
        // MONGO QUERY: db.collection.find()
        // MONGOOSE QUERY:
        SuperHero.find()
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }))
    },
    getHeroById: (req,res) => {
        // MONGO QUERY: db.collection.find({ object you want to use to search })
        // MONGOOSE QUERY:
        SuperHero.findById(req.params.id)
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }))
    },
    // U
    updateHero: (req,res) => {
        // MONGO QUERY: db.collection.update({ search object }, { what you want to update to }, boolean for full replacement or not)
        // MONGOOSE:
        SuperHero.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }))
    },
    // D
    deleteHero: (req,res) => {
        // MONGO QUERY: db.collection.delete({ search terms })
        // MONGOOSE QUERY: 
        SuperHero.deleteOne({ _id: req.params.id })
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }))
    }
}