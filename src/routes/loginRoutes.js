const express = require('express');
const router = express.Router();

const passport = require('passport')

/* GET Login page. */
router.get('/', (req, res, next) => {
  
  if(req.query.fail) {
    res.render('login', {message: 'Usuario e/ou senha inválidos!'});
  } else {
    res.render('login', {message: null})
  }
  
});


/* POST Login page. */
router.post('/', passport.authenticate('local', {
  successRedirect: '/index',
  failureRedirect: '/login?fail=true'
}));


module.exports = router;
