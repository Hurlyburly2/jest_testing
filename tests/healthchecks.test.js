const axios = require('axios')
const routes = require('./getRoutes')

/**
 * Smoke tests
 * @group smoke
 */
describe('Tests Converter Endpoint', () => {
    test('two plus two is four', () => {
        expect(2 + 2).toBe(4)
    })
})
describe('Tests Converter Again', () => {
    test('three plus two is five', () => {
        expect(2 + 3).toBe(5)
    })
})
