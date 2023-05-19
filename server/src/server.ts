import 'dotenv/config'

import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import fastifyCors from '@fastify/cors'
import { authRoutes } from './routes/auth'
import fastifyJwt from '@fastify/jwt'

const app = fastify()

app.register(fastifyCors, {
  origin: true,
})

app.register(fastifyJwt, {
  secret: 'weifrg3joeon!22BBhb37@3ubefi00477299017we-47',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP Server running on localhost:3333')
  })
