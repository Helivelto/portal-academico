const mysql = require('mysql')

class DbConnection {

    connection(){
        if(!this.conn){
            this.conn = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '12345678', //Senha da escola
                database: 'academicodb_2b_15' // Banco de dados criado na escola
            });

            this.conn.connect((error) => {

                if(error) {
                    console.log(`Error: ${error}`)
                    throw error;
                };
                console.log('Conectado com sucesso!')


            })
        }
        return this.conn;
    }
}

module.exports = new DbConnection()