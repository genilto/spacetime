import 'dotenv/config'

import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import fastifyCors from '@fastify/cors'
import { authRoutes } from './routes/auth'
import fastifyJwt from '@fastify/jwt'
import fastifyStatic from '@fastify/static'
import multipart from '@fastify/multipart'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'path'

const app = fastify()

app.register(fastifyCors, {
  origin: true,
})

app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET as string,
})

app.register(multipart)

app.register(fastifyStatic, {
  root: resolve(__dirname, '..', 'uploads'),
  prefix: '/uploads',
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP Server running on localhost:3333')
  })
