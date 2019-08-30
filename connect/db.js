var mysql      = require('mysql');
module.exports = () => {
  return mysql.createConnection({
    host     : 'localhost',
    user     : 'foo',
    password : 'curso',
    database : 'visibilidad'

  });
}

