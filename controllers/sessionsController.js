const bcrypt = require('bcrypt')
const router = require('express').Router()
const members = require('../models/members');


router.get('/new', (req, res) => {
    res.render('../views/sessions/new.ejs', { 
        currentMember: req.session.currentMember
    })
})

router.post('/', async (req, res) => {
    try {
        const foundMember = await members.findOne({ username: req.body.username })
        if (!foundMember) {
            res.send('<a  href="/">Sorry, username not found </a>')
        
        } else if (bcrypt.compareSync(req.body.password, foundMember.password)) {
            req.session.currentMember = foundMember
            res.redirect('/')
        } else {
            res.send('<a href="/"> password does not match </a>')
        }
      } catch(err) {
        console.log(err)
        res.send('oops there is an unexpected problem, try again')
      }
    })
    
    router.delete('/', (req, res) => {
      req.session.destroy(() => {
        res.redirect('/')
      })
    })

 //ADD THE NEW MEMBER
  router.get('/members/new', function (req, res){
    res.render("members/new.ejs",  {currentMember: req.session.currentMember } )
})

//CREATE NEW MEMBERS
router.post('/members', async (req, res) => {
  try{
      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
      const newMember = await members.create(req.body)
      req.session.currentMember = newMember
      console.log(newMember)
      res.redirect('/')
  }catch(err){
      console.log(err)
  }
})

    module.exports = router