const isAuthenticated = (req, res, next) => {
    if (req.session.currentMember) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
  }
  
  module.exports = isAuthenticated
  