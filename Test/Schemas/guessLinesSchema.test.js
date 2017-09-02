const fs = require('fs')
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const expect = Lab.expect

const app = require('../../app')
const GuessLine = app.Schemas.guessesLinesSchema
const serverErrors = app.Utils.errorUtils.serverErrors

const guessLinesSchemas = JSON.parse(fs.readFileSync('Test/Schemas/SchemaFiles/guessLineSchemasFile.json'))

lab.experiment('GuessLineSchema Validator', () => {

  lab.test('GuessLineSchema HappyPath', (done) => {
    const correctSchema = new GuessLine(guessLinesSchemas.correctSchema)
    correctSchema.validate((err) => {
      expect(err).to.equal(null)
      done()
    })
  })
  lab.test('GuessLineSchema userData Wrong', (done) => {
    const userDataWrongSchema = new GuessLine(guessLinesSchemas.userDataWrong)
    userDataWrongSchema.validate((err) => {
      expect(err.errors.guessLineActive.message).to.be.equal('Path `guessLineActive` is required.')
      done()
    })
  })
  lab.test('GuessLineSchema championshipData Wrong', (done) => {
    const championshipDataSchema = new GuessLine(guessLinesSchemas.championshipDataWrong)
    championshipDataSchema.validate((err) => {
      expect(err.errors['championship.championshipRef'].message).to.be.equal(String(serverErrors.notMongoIdValid))
      expect(err.errors['championship.season'].message).to.be.equal('Path `season` is required.')
      done()
    })
  })
})