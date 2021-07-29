const express = require('express');
const router = express.Router();

const newsRouter = require('../app/controllers/SitesControllers');

// newsRouter index

router.get('/', newsRouter.home);

module.exports = router;
