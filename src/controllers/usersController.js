const usersController = {

  login: (req,res) => {
      return  res.render ('home')    
    },
  register: (req,res) => {
      return  res.render ('register')
    },
    profile: (req,res) => {
      return  res.render ('profile')
    },
}

module.exports= usersController;