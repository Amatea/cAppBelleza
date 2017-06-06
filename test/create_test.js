const assert = require('assert')
const User = require('../models/user')

describe('Creating records', () => {
  it('saves a user', (done) => {
    const admin = new User({
      username: 'admin',
      password: '12345',
      fullName: 'Don Admini',
      role: 'ADMIN'
    })

    admin.save()
      .then(() => {
        assert(!admin.isNew)
        done()
      })
  })
})
