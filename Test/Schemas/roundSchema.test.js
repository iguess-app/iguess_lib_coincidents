const fs = require('fs')
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const expect = Lab.expect

const app = require('../../app')
const Notifications = app.Schemas.roundSchema

const roundSchemas = JSON.parse(fs.readFileSync('Test/Schemas/SchemaFiles/roundSchemasFile.json'))

lab.experiment('NotificationsSchema Validator', () => {

  lab.test('NotificationsSchema HappyPath', (done) => {
    const correctSchema = new Notifications(roundSchemas.correctSchema)
    correctSchema.validate((err) => {
      expect(err).to.equal(null)
      done()
    })
  })

/*   lab.test.only('NotificationsSchema wrongFixture', (done) => {
    const correctSchema = new Notifications(roundSchemas.correctSchema)
    correctSchema.validate((err) => {
      expect(err).to.equal(null)
      done()
    })
  }) */
})