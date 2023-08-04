const templatesJson = require('../../data/templates.json')
const extendedTemplatesJson = require('../../data/extendedTemplate.json')

/**
 * @description Get all template
 * @route GET /api/v1/templates
 * @access public
 */
const getTemplates = (req, res) => {
    res.json(templatesJson)
}

/**
 * @description Get all extended template
 * @route GET /api/v1/templates/extended
 * @access public
 */
const getExtendedTemplates = (req, res) => {
    res.json(extendedTemplatesJson)
}


module.exports = {
    getTemplates,
    getExtendedTemplates
}