

module.exports = app => {
    const pollution = require("../controllers/pollution.controllers.js");
  
    var router = require("express").Router();
  

   
    router.findAll("/", pollution.get);
  
    app.use('/api/pollution', router);
  };
