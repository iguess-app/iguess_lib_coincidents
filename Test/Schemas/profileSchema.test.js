const fs = require('fs')
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const expect = Lab.expect

const app = require('../../app')
const Profile = app.Schemas.profileSchema

const profileSchemas = JSON.parse(fs.readFileSync('Test/Schemas/SchemaFiles/profileSchemasFile.json'))

lab.experiment('ProfileSchema Validator', () => {

  lab.test('ProfileSchema HappyPath', (done) => {
    const correctSchema = new Profile(profileSchemas.correctSchema)
    correctSchema.validate((err) => {
      expect(err).to.equal(null)
      done()
    })
  })
})