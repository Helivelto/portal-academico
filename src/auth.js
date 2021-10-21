const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

// https://bcrypt-generator.com/

const users = [{
    _id: 1,
    username: 'adm',
    password: '$2a$12$3caOf6oifKGKWdgzbpYL7.ZNz2G7kuUlbltqSVKkhn6CEas.neGy2', // 123
    email: 'adm@gamil.com'
}];

function findUser(username) {
    return users.find(item => item.username === username);
};

function findUserById(id) {
    return users.find(item => item._id === id);
};


module.exports = (passport) => {

    // serializeUser => uma vez autenticado ele salva um cookie no fromt e uma sessão no back.
    passport.serializeUser((user, done) => {
        done(null, user._id);
    })


    // deserializeUser => Uma vez que as informações estão gravadas, posso recuperá-las 
    passport.deserializeUser((id, done) => {
        try {
            const user = findUserById(id);
            done(null, user);
        } catch (error) {
            console.log(error);
            return done(error, null);
        }
    })

    passport.use(new LocalStrategy({
        username: 'username',
        password: 'password'
    }, (username, password, done) => {
        try {
            const user = findUser(username);

            if(!user) return done(null, false);

            const isValid = bcrypt.compareSync(password, user.password);
            if(!isValid) return done(null, false);
            return (done(null, user));

        } catch (error) {
            console.log(error);
            return done(error, false);
        }
    }))

};