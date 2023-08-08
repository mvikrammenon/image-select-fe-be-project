const request = require('supertest')
const { app } = require('../../server')
const templatesJson = require('../../../data/templates.json')
const extendedTemplatesJson = require('../../../data/extendedTemplate.json')


describe('Template Routes', () => {
  test('GET /api/v1/templates returns templates', async () => {
    const response = await request(app).get('/api/v1/templates')
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(templatesJson.length)
  })

  test('GET /api/v1/templates/extended returns extended templates', async () => {
    const response = await request(app).get('/api/v1/templates/extended')
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(extendedTemplatesJson.length)
  })
})