const fs = require('fs')
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const expect = Lab.expect

const app = require('../../app')
const Pontuation = app.Schemas.pontuationsSchema
const serverErrors = app.Utils.errorUtils.serverErrors

const pontuationSchemas = JSON.parse(fs.readFileSync('Test/Schemas/SchemaFiles/pontuationSchemasFile.json'))

lab.experiment('PontuationSchema Validator', () => {

  lab.test('PontuationSchema HappyPath', (done) => {
    const correctSchema = new Pontuation(pontuationSchemas.correctSchema)
    correctSchema.validate((err) => {
      expect(err).to.equal(null)
      done()
    })
  })
})