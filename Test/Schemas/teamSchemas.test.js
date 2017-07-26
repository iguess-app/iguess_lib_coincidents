const Lab = require('lab')
const lab = exports.lab = Lab.script()
const expect = Lab.expect

const app = require('../../app')
const Team = app.Schemas.teamSchema

lab.experiment('TeamSchema Assert', () => {

  lab.test('TeamSchema HappyPath', (done) => {
    const avai = new Team({
      'league': '5872467bed1b02314e08828a',
      'fullName': 'Avaí Futebol Clube',
      'shortName': 'Avai',
      'logo': 'Link'
    })
    avai.validate((err) => {
      expect(err).to.equal(null);
      done();
    })
  });

  lab.test('TeamSchema withOut fullName', (done) => {
    const avai = new Team({
      'league': '5872467bed1b02314e08828a',
      'shortName': 'Avai',
      'logo': 'Link'
    })
    avai.validate((err) => {
      expect(err.errors.fullName).to.exists();
      done();
    })
  });

  lab.test('TeamSchema with league Ref equal to null', (done) => {
    const avai = new Team({
      'league': null,
      'fullName': 'Avaí Futebol Clube',
      'shortName': 'Avai',
      'logo': 'Link'
    })
    avai.validate((err) => {
      expect(err.errors.league).to.exists();
      done();
    })
  });

  lab.test('TeamSchema with league Ref on wrong size', (done) => {
    const avai = new Team({
      'league': '5872467bed',
      'fullName': 'Avaí Futebol Clube',
      'shortName': 'Avai',
      'logo': 'Link'
    })
    avai.validate((err) => {
      expect(err.errors.league).to.exists();
      done();
    })
  });
});