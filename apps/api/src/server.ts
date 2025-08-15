import fastify from 'fastify'
import { remultApi } from 'remult/remult-fastify'
import { Contact } from '@libs/remult/models'
import fastifyRateLimit from '@fastify/rate-limit'
import path from 'node:path'
import fs from 'node:fs'

const server = fastify()

server
    .register(fastifyRateLimit, {
        max: 1,
        timeWindow: '1 minute',
        hook: 'onRequest',
    })
    .register(remultApi({
        entities: [Contact]
    }))
    .get('/api/downloads/resume', async (request, reply) => {
        const pdfPath = path.join(__dirname, 'files', 'resume.pdf')
        return reply
            .header('Content-Disposition', `attachment; filename="DEJESUS_RESUME.pdf"`)
            .header('Content-Type', 'application/octet-stream')
            .send(fs.createReadStream(pdfPath))
    })


server.listen({ host: '0.0.0.0', port: Number(process.env.PORT || 5000) }, (err, address) => {
    if (err) {
        console.error('Error starting server:', err)
        process.exit(1)
    }
    console.log(`Server is running at ${address}`)
})

