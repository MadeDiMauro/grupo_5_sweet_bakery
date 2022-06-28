const path = require("path");
const fs = require('fs');

const coursesDbPath = path.join(__dirname, '../database/courses.json');

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, 'utf-8');
    const dataParsed = JSON.parse(data);
    return dataParsed;
}

const coursesController = {
    list: (req, res) => {
        const coursesList = readJsonFile(coursesDbPath);
        return res.render('courses/courses', { coursesList });
    },
    detail: (req, res) => {
        const coursesList = readJsonFile(coursesDbPath);
        const courseDetail = coursesList.find((course) => course.id == req.params.id);
        return res.render('courses/detail', { courseDetail });
    }
}

module.exports = coursesController;



