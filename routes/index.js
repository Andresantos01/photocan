const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const save = require('instagram-save');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Router main page
router.get("/", (req, res) => {
  res.render("index", { title: 'PhotoCan', user: 'Alexandre' })
});


function getHAs(t, cb){
  var o = 41
  cb(o);
}



//Find tags and params
router.get("/find", (req, res) => {
  console.log(req.query);
  getHAs(req.query.param1, (cb)=>{
    console.log(cb);
  });
  res.send(req.query);
  
});

module.exports = router;