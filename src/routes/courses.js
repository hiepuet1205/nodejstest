const express = require('express');
const router = express.Router();

const coursesRouter = require('../app/controllers/CoursesControllers');

// coursesRouter index

router.get('/create', coursesRouter.create);
router.post('/store', coursesRouter.store);
router.post('/handle-form-action', coursesRouter.handleFormAction);
router.get('/:id/edit', coursesRouter.edit);
router.put('/:id', coursesRouter.update);
router.patch('/:id/restore', coursesRouter.restore);
router.delete('/:id', coursesRouter.delete);
router.delete('/:id/force', coursesRouter.forceDelete);
router.get('/:slug', coursesRouter.show);

module.exports = router;
