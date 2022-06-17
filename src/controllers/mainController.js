const mainController = {
    home: (req, res) => {
        return res.render ('main/home')
    },
    about: (req, res) => {
        return res.render ('main/about')
    },
    contact: (req, res) => {
        return res.render ('main/contact')
    },
    questions: (req,res) => {
        return res.render ('main/questions')
    }
        

}

module.exports = mainController;