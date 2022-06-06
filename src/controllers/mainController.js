const mainController = {
    about: (req, res) => {
        return res.render ('about')
    },
    contact: (req, res) => {
        return res.render ('contact')
    },
    giftcard: (req,res) => {
        return res.render ('giftcard')
    }

}

module.exports = mainController;