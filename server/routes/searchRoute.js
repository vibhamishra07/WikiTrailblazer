const express = require("express");
const router = express.Router();
const searchCtl=require("../controllers/searchCtl.js")

router.post('/count-trails-url', searchCtl.countTrailUrls)

module.exports=router;