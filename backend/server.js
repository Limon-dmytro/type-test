const fastify = require('fastify')({ logger: true})

//Підключаємо маршрути та регеструємо їх
const textRoutes = require('./routes/text')
const resultRoutes = require('./routes/result')


fastify.register(textRoutes)
fastify.register(resultRoutes)

fastify.get('/' , async (request, reply) => {
    return { message: 'Сервер TypeTest працює'}
})

const starting = async () => {
    try {
      await  fastify.listen({ port: 3000, host: '127.0.0.1'})
      console.log('Сервер запрацював на http://127.0.0.1:3000')
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
}

starting()