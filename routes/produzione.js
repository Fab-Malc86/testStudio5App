const express = require('express')

const router = express.Router()


router.get('/produzione', (req, res) => {
  res.render('produzione/homeProduzione', { pageTitle: 'Studio5 Produzione', nameUser: 'Giovanni Palombella' })

})


module.exports = router