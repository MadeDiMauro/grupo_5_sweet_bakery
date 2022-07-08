const path = require("path");

const coursesController = {
    list: (req, res) => {
        return res.render('courses/courses');
    },
    detail: (req, res) => {
        return res.render('courses/detail');
    }
}

module.exports = coursesController;




