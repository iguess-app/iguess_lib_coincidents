const fs = require('fs')
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const expect = Lab.expect

const app = require('../../app')
const Notifications = app.Schemas.notificationsSchema
const serverErrors = app.Utils.errorUtils.serverErrors

const notificationsSchemas = JSON.parse(fs.readFileSync('Test/Schemas/SchemaFiles/notificationsSchemasFile.json'))

lab.experiment('NotificationsSchema Validator', () => {

  lab.test('NotificationsSchema HappyPath', (done) => {
    const correctSchema = new Notifications(notificationsSchemas.correctSchema)
    correctSchema.validate((err) => {
      expect(err).to.equal(null)
      done()
    })
  })
  lab.test('NotificationsSchema userRefIncorrect', (done) => {
    const userRefIncorrectSchema = new Notifications(notificationsSchemas.userRefIncorrect)
    userRefIncorrectSchema.validate((err) => {
      expect(err.errors.user.message).to.be.equal(String(serverErrors.notMongoIdSize))
      done()
    })
  })
  lab.test('NotificationsSchema notificationArrayIncorrect', (done) => {
    const notificationArrayIncorrectSchema = new Notifications(notificationsSchemas.notificationArrayIncorrect)
    notificationArrayIncorrectSchema.validate(() => {
      //TODO validate the notification array
      done()
    })
  })
})