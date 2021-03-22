// import models needed for this controller
const Coffee = require('../models/model');

// my controller is basically just an object where each key has a function for a value
module.exports = {
    // C
    createCoffee: (req, res) => {
        // If uniqueness is not needed
        // Coffee.create(req.body)
        //     .then(data => res.status(200).json({ message: "success", results: data }))
        //     .catch(err => res.json({ message: "error", errors: err.errors }));
        // If uniqueness is needed
        Coffee.exists({ name: req.body.name })
            .then(coffeeExists => {
                if(coffeeExists){
                    return Promise.reject({ errors: { name: { message: "A coffee with that name already exists in the database" } } });
                } else {
                    return Coffee.create(req.body);
                }
            })
            // .then(coffeeExists => coffeeExists ? Promise.reject("A coffee with that name already exists in the database") : Coffee.create(req.body))
            .then(data => res.status(200).json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    // R
    getAllCoffee: (req, res) => {
        Coffee.find()
            .then(data => res.status(200).json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    getOneCoffee: (req, res) => {
        Coffee.findById(req.params.id)
            .then(data => res.status(200).json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    // U
    updateCoffee: (req, res) => {
        // Coffee.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        Coffee.findOne({ name: req.body.name })
            .then(data => {
                if(data._id != req.params.id) {
                    return Promise.reject({ errors: { name: { message: "There's another coffee with that name in the database" } } }) ;
                }
                else {
                    return Coffee.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidator: true });
                } 
            })
            .then(data => res.status(200).json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    // D
    deleteCoffee: (req, res) => {
        Coffee.remove({ _id: req.params.id })
            .then(data => res.status(200).json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err }));
    }
}