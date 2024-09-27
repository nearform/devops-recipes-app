// ESM
import Fastify from 'fastify'

function build(opts={}) {
  const app = Fastify(opts)
  app.get('/api', async function (request, reply) {
    reply
    .header("Access-Control-Allow-Origin", "*")
    .code(200)
    .send({ hello: 'world is super' })
  })
  app.get('/status', async function (request, reply) {
    reply
    .header("Access-Control-Allow-Origin", "*")
    .code(200)
    .send()
  })

  app.register(import('fastify-postgres'), {
    connectionString: `postgres://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_ADDRESS}/postgres?sslmode=require`
  })

  app.get('/test-pg', async function (request, reply) {
    const client = await app.pg.connect()
    const now = await client.query(
      'SELECT NOW()'
    )
    client.release()
    reply
    .header("Access-Control-Allow-Origin", "*")
    .code(200)
    .send({ hello: `world is super ${now.rows[0].now}` })
  })

  return app
}

export {
  build
}
