const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const User = conn.define('user', {
  name: conn.Sequelize.STRING
});

const sync = ()=> conn.sync({ force: true });

const seed = ()=> {
  const users = ['Moon', 'Leo', 'Nancy'];

  return sync()
    .then(()=> {
      const promises = users.map(name => User.create({ name }));
      return Promise.all(promises);
    });
};

module.exports = {
  models: {
    User
  },
  sync,
  seed
};
