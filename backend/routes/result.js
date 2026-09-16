async function  resultRoutes(fastify , options) {
    fastify.post('/api/result' , async (request , reple) => {
        const { wpm, errors , accuracy , time } = request.body

        console.log('Отримано роезультат тесту: ')
        console.log('WPM: ' , wpm)
        console.log('Помилки :' , errors)
        console.log('Точність :' , accuracy + '%')
        console.log('Час :' , time + ' секунди')

        return {
            success: true,
            message: 'Результат успішно отримано',
            data: {
                wpm,
                errors,
                accuracy,
                time
            }
        }
    })
}

module.exports =  resultRoutes