const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/', (req, res) => {
    Users.find()
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;