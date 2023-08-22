const fs = require('fs')
const path = require('path')

const templatesJsonPath = path.resolve(__dirname, '../../data/templates.json')
const templatesJson = require(templatesJsonPath)
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

/**
 * @description Adds template to templates.json
 * @route POST /api/v1/templates/addTemplate
 * @access public
 */
const addTemplates = (req, res) => {
    let template = req.body
    template.id = `${Date.now()}`
    console.log('template', template)
    console.log('full path', templatesJsonPath)

    fs.readFile(templatesJsonPath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        try {
            let existingData = JSON.parse(data)
            existingData.push(template)
            const appendedData = JSON.stringify(existingData, null, 2)

            fs.writeFile(templatesJsonPath, appendedData, (err) => {
                if (err) {
                    console.error('Write file error')
                    console.error(err);
                }
                else {
                    console.log("File written successfully\n");
                    res.json({ message: 'Template added successfully', data: template })
                }
            });
        } catch (e) {
            console.error('Error after data parse and append')
            console.error(e)
        }
    })
}

module.exports = {
    getTemplates,
    getExtendedTemplates,
    addTemplates,
}