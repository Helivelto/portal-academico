const express = require('express');
const router = express.Router();


/* GET Login page. */
router.get('/', (req, res, next) => {

    req.logout();
    res.redirect('/')
  
});



module.exports = router;
