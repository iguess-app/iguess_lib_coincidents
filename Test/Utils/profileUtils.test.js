const Lab = require('lab')
const lab = exports.lab = Lab.script()
const expect = Lab.expect

const app = require('../../app')
const ProfileUtils = app.Utils.profileUtils
const ErrorUtils = app.Utils.errorUtils

lab.experiment('Profile Utils Tests', () => {

  lab.test('Check if is Email - Success', (done) => {
    const testEmail = 'lucas@iguessteam.com'
    expect(ProfileUtils.isEmail(testEmail)).to.equal(true)
    done()
  })

  lab.test('Check if is Email - Failing', (done) => {
    const testEmail = 'iguessteam.com'
    expect(ProfileUtils.isEmail(testEmail)).to.equal(ErrorUtils.userErrors.notEmail)
    done()
  })
})