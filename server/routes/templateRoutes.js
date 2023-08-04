const express = require('express')
const router = express.Router()
const { getTemplates, getExtendedTemplates } = require('../controllers/templateController')

router.route('/').get(getTemplates)
router.route('/extended').get(getExtendedTemplates)

module.exports = router 