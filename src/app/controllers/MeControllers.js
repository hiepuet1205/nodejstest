const Course = require('../models/Courses');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted({})])
            .then(([course, countDocumentsDeleted]) => {
                res.render('me/stored-courses', {
                    countDocumentsDeleted: countDocumentsDeleted,
                    course: multipleMongooseToObject(course),
                });
            })
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((course) => {
                res.render('me/trash-courses', {
                    course: multipleMongooseToObject(course),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
