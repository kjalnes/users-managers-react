const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL);

const User = conn.define('user', {
  name: conn.Sequelize.STRING,
  isManager: conn.Sequelize.BOOLEAN
});

User.belongsTo(User, {as: 'manager'});
// User.hasMany(User, {as: 'employees', foreignKey: 'managerId'});

const sync = ()=> conn.sync({ force: true });

const seed = ()=> {
  return sync()
    .then(()=> {
      return Promise.all([
          User.create({name: 'Moon', isManager: true, managerId: null}),
          User.create({name: 'Leo', isManager: true, managerId: 1}),
          User.create({name: 'Nancy', isManager:false, managerId: 2}),
          User.create({name: 'Corny', isManager:true, managerId: 2}),
          User.create({name: 'Sindre', isManager:true, managerId: 4}),
          User.create({name: 'Eva', isManager:false, managerId: 2})
        ]);
    })
};

module.exports = {
  models: {
    User
  },
  sync,
  seed
};
