const User = require('../../db').User
const route = require('express').Router()

route.get('/', (req, res) => {
    // We want to send an array of all users
    // From our database here

    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive users"
            })
        })

})

route.post('/', (req, res) => {
    // We expect the req to have name in it
    // We will create a new user 
    nm = req.body.name
    // console.log(`name : ${req.body.name}`)
    
    console.log(`name : ${nm}`)
    
    User.create({
        name: nm
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(501).send({
            error: `Could not add new user and {user}`
        })
    })
})

exports = module.exports = route