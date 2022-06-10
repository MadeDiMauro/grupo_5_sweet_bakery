const usersController = {

  login: (req,res) => {
      return  res.render ('users/login')    
    },
  register: (req,res) => {
      return  res.render ('users/register')
    },
   /* profile: (req,res) => {
      return  res.render ('profile')
    }
    */
}

module.exports= usersController;