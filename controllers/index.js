const router = require('express').Router({mergeParams: true});

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');


router.use("/", homeRoutes);
router.use("/api", apiRoutes);


module.exports = router;
