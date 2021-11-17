const DbConnection = require('.../config/DbConnecticon');

class User {

    findUsers() {
        return new Promisse((resolve, reject) => {
            DbConnection.connection().query("SELECT * from usuario", (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    }

    

};

module.exports = new User()