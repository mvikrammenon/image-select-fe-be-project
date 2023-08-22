const express = require('express')
const router = express.Router()
const { getTemplates, getExtendedTemplates, addTemplates } = require('../controllers/templateController')

// GET requests
router.route('/').get(getTemplates)
router.route('/extended').get(getExtendedTemplates)

// POST requests
router.route('/addTemplate').post(addTemplates)

module.exports = router 