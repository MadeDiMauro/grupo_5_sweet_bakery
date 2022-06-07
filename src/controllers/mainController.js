const mainController = {
    home: (req, res) => {
        return res.render ('home')
    },
    about: (req, res) => {
        return res.render ('about')
    },
    contact: (req, res) => {
        return res.render ('contact')
    },
    giftcard: (req,res) => {
        return res.render ('giftcard')
    },
    base: (req, res) => {
        return res.render ('base')
    }

}

module.exports = mainController;