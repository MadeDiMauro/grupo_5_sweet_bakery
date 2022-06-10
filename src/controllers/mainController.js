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
    giftcard: (req,res) => {
        return res.render ('main/giftcard')
    }    

}

module.exports = mainController;