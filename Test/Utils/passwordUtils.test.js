const Lab = require('lab')
const lab = exports.lab = Lab.script()
const expect = Lab.expect

const app = require('../../app')
const PasswordUtils = app.Utils.passwordUtils

lab.experiment('Password Utils Tests', () => {

  lab.test('Check Password Crypted - Success', (done) => {
    const testPassword = 'MyP@ssW0rdd'
    PasswordUtils.cryptPassword(testPassword)
      .then((hash) => PasswordUtils.checkPassword(testPassword, hash))
      .then((bool) => {
        expect(bool).to.equal(true)
        done()
      })
  })

  lab.test('Check Password Crypted - Failing', (done) => {
    const testPassword = 'MyP@ssW0rdd'
    PasswordUtils.cryptPassword(testPassword)
      .then((hash) => PasswordUtils.checkPassword(testPassword, `${hash}GONEFAIL`))
      .then((bool) => {
        expect(bool).to.equal(false)
        done()
      })
  })
})