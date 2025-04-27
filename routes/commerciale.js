const express = require('express')

const router = express.Router()


router.get('/commerciale', (req, res) => {
  res.render('commerciale/homeCommerciale', { pageTitle: 'Studio5 Commerciale', userName: 'Fabrizio Ventura' })
})


module.exports = router