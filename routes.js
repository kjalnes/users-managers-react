const app = require('express').Router();
const models = require('./db').models;

module.exports = app;

app.get('/users', (req, res, next)=> {
    models.User.findAll({
        order: 'name',
        include: [{ model: models.User, as: 'manager' }]
    })
    .then( users => res.send(users) )
    .catch(next)
})
