import fastify from 'fastify'

const server = fastify()


server.listen({ host: '0.0.0.0', port: Number(process.env.PORT || 5000) }, (err, address) => {
    if (err) {
        console.error('Error starting server:', err)
        process.exit(1)
    }
    console.log(`Server is running at ${address}`)
})

