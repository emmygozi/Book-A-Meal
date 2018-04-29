// import request from 'supertest';
import { expect } from 'chai';
import token from '.././Auth/userToken';


const mockToken = '68734hjsdjkjksdjkndjsjk78938823sdvzgsuydsugsup[d73489jsdbcuydsiudsy';
// const genToken = `Bearer ${mockToken}`;


describe('Token available', () => {
  it('Test token type', () => {
    expect(token).to.include(mockToken);
    expect(token).to.include(mockToken);
    expect(token).to.be.a('string');
  });
});
