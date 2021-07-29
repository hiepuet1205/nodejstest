const express = require('express');
const router = express.Router();

const meRouter = require('../app/controllers/meControllers');

// meRouter index

router.get('/stored/courses', meRouter.storedCourses);
router.get('/trash/courses', meRouter.trashCourses);

module.exports = router;
