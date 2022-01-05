require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
    base_url: process.env.BASE_MPS_URL,
    iiif_converter: {
        port: process.env.IIIF_CONVERTER_PORT,
        healthcheck: process.env.IIIF_CONVERTER_VERSION_ROUTE
    }
}