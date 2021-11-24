const DbConnection = require('../config/DbConnection');

class User {

    findUsers() {
        return new Promisse((resolve, reject) => {
            const sql = `SELECT * from usuarios`
            DbConnection.connection().query(sql, (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    }

    findUser(username) {
        return new Promisse((resolve, reject) => {
            const sql = `SELECT * from usuarios WHERE email_usuario = '${username}'`
        
            DbConnection.connection().query(sql, (err, result) => {
                if(err) reject(err)
                resolve(result[0])
            })
        })
    }

    findUserById(id) {
        return new Promisse((resolve, reject) => {
            const sql = `SELECT * from usuarios WHERE id = '${id}'`
            DbConnection.connection().query(sql, (err, result) => {
                if(err) reject(err)
                resolve(result[0])
            })
        })
    }

    

};

module.exports = new User()