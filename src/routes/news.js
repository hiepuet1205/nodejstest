const express = require('express');
const router = express.Router();

const newsRouter = require('../app/controllers/NewsControllers');

// newsRouter index

router.get('/:slug', newsRouter.show);
router.get('/', newsRouter.index);

module.exports = router;
