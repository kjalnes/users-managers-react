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

app.put('/users/:id', (req, res, next) => {
    const id = req.params.id;
    const managerId = req.query.managerId ? req.query.managerId : null;

    models.User.findOne({ where: { id: id}})
    .then( (user) => {
        user.update({ managerId: managerId })
        .then( user => user.save())
        .then( user => res.sendStatus(200));
    })
})
