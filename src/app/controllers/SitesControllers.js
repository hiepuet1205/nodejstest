const Course = require('../models/Courses');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SitesController {
    //get home

    home(req, res, next) {
        //res.render('home');

        Course.find({})
            .then((course) => {
                res.render('home', {
                    course: multipleMongooseToObject(course),
                });
            })
            .catch(next);
    }
}

module.exports = new SitesController();
