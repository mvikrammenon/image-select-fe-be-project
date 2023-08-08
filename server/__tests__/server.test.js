const request = require('supertest')
const { app } = require('../server')

const testLargeImagePath = 'large/7111-b.jpg'
const testThumbnailImagePath = 'thumbnails/7111-m.jpg'

describe('Static File Serving', () => {
    test('should serve large image', async () => {
        const response = await request(app).get(`/images/${testLargeImagePath}`)
        expect(response.status).toBe(200)
        expect(response.header['content-type']).toContain('image/jpeg')
    });

    test('should serve thumnail image', async () => {
        const response = await request(app).get(`/images/${testThumbnailImagePath}`)
        expect(response.status).toBe(200)
        expect(response.header['content-type']).toContain('image/jpeg')
    });
})
