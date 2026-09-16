const texts = require('../data/texts')

async function textRoutes(fastify, options) {
    fastify.get('/api/text' , async (request , reple) => {
        const randomText = texts[Math.floor(Math.random() * texts.length)]
        return { text:  randomText }
    })
}

module.exports =  textRoutes