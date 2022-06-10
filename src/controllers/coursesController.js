const path=require ("path");

const coursesController = {
    list: (req, res) => {
        return res.send('Soy cursos');
    },
    detail: (req, res) => {
        res.send('Soy el detalle de cursos');
    }
}

module.exports = coursesController;