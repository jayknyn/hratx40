const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
// Tests can also be written with 'expect' rather than 'should' if desired
// const expect = chai.expect;

chai.use(chaiHttp);

describe('post delete Favorites', () => {
  it('it should post delete favorite data', (done) => {
    chai
      .request(`http://localhost:8000`)
      .post('/api/deleteFavorites').type('application/json').send({
        "topic_id": "1",
        "user_id": "1"
      })
      .then((res) => {
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('array');
        // res.body.should.equal([])
        done();
      })
      .catch(err => err);
  });
});
