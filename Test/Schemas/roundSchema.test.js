const fs = require('fs')
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const expect = Lab.expect

const app = require('../../app')
const Notifications = app.Schemas.roundSchema
const userErrors = app.Utils.errorUtils.userErrors
const serverErrors = app.Utils.errorUtils.serverErrors

const roundSchemas = JSON.parse(fs.readFileSync('Test/Schemas/SchemaFiles/roundSchemasFile.json'))

lab.experiment('NotificationsSchema Validator', () => {

  lab.test('NotificationsSchema HappyPath', (done) => {
    const correctSchema = new Notifications(roundSchemas.correctSchema)
    correctSchema.validate((err) => {
      expect(err).to.equal(null)
      done()
    })
  })

   lab.test('NotificationsSchema many errors checker', (done) => {
    const someErrorsSchema = new Notifications(roundSchemas.someErrorsSchema)
    someErrorsSchema.validate((err) => {
      expect(err.errors.fixture.message).to.be.equal(String(userErrors.notValidFixture))
      expect(err.errors.championshipRef.message).to.be.equal(String(serverErrors.notMongoIdSize))
      expect(err.errors['games.0._id'].message).to.be.equal('Cast to ObjectID failed for value "notObjectID" at path "_id"')
      expect(err.errors['games.0.initTime'].message).to.be.equal('Cast to Date failed for value "21/11/2011" at path "initTime"')
      expect(err.errors['games.0.stadium'].message).to.be.equal('Path `stadium` is required.')
      done()
    })
  }) 
})