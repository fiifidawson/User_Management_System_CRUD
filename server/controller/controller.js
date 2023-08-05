var Userdb = require('../model/model')

// create and save new user
exports.create = (req, res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }

    // new user
    const user = new Userdb({
        
    })
}

// retrieve and return all users or retrieve and return a single user
expoerts.find = (req, res) => {

}

// Update a new identified user by user id 
exports.update = (req, res) => {

}

// Delete a user with specified user id in the request
exports.delete = (req, res) => {

}