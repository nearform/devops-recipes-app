'use strict'

import { test } from 'tap'
import { build } from './app.mjs'

test('requests the "/api" route', async t => {
  const app = build()

  const response = await app.inject({
    method: 'GET',
    url: '/api'
  })
  t.equal(response.statusCode, 200, 'returns a status code of 200')
})
