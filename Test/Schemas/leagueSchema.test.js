const fs = require('fs')
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const expect = Lab.expect

const app = require('../../app')
const League = app.Schemas.leagueSchema

const guessLinesSchemas = JSON.parse(fs.readFileSync('Test/Schemas/SchemaFiles/leagueSchemasFile.json'))

lab.experiment('LeagueSchema Validator', () => {

  lab.test('LeagueSchema HappyPath', (done) => {
    const correctSchema = new League(guessLinesSchemas.correctSchema)
    correctSchema.validate((err) => {
      expect(err).to.equal(null)
      done()
    })
  })
  lab.test('LeagueSchema withOutContryInitials', (done) => {
    const withOutContryInitialsSchema = new League(guessLinesSchemas.withOutContryInitials)
    withOutContryInitialsSchema.validate((err) => {
      expect(err.errors.countryInitials.message).to.be.equal('Path `countryInitials` is required.')
      done()
    })
  })
  lab.test('LeagueSchema serieNotNumber', (done) => {
    const serieNotNumberSchema = new League(guessLinesSchemas.serieNotNumber)
    serieNotNumberSchema.validate((err) => {
      expect(err.errors.serie.message).to.be.equal('Cast to Number failed for value "Primeira DIVISION" at path "serie"')
      done()
    })
  })
})