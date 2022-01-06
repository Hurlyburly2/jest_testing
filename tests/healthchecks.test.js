const axios = require('axios')
const https = require('https')

const routes = require('./routes')

axios.defaults.adapter = require('axios/lib/adapters/http')
axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })

beforeAll( async () => {
    // console.log(2 + 2)
})

/**
 * Smoke tests
 * @group smoke
 */
describe('Tests IIIF Converter Health', () => {
    test('Successful response from version route', async () => {
        const converter_version_route = routes['base_url'] + ':' + routes['iiif_converter']['port'] + '/' + routes['iiif_converter']['healthcheck']
        const response = await axios.get( converter_version_route )
            .catch(function (error) {
                console.log(error)
            })
        expect(response.status).toBe(200)
        expect(response.data.hasOwnProperty('version'))
        expect(response.data['version']).toBeDefined();
        expect(response.data['version']).not.toBeNull();
    })
})

describe('Tests IIIF Validator Health', () => {
    test('Successful response from version route', async () => {
        const validator_version_route = routes['base_url'] + ':' + routes['iiif_validator']['port'] + '/' + routes['iiif_validator']['healthcheck']
        const response = await axios.get( validator_version_route )
            .catch(function (error) {
                console.log(error)
            })
        expect(response.status).toBe(200)
        expect(response.data.hasOwnProperty('version'))
        expect(response.data['version']).toBeDefined();
        expect(response.data['version']).not.toBeNull();
    })
})
