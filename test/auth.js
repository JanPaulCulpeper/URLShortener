const assert = require('assert');
const fetch = require('node-fetch');
const { expect } = require('chai').use(require('chai-as-promised'));
const crypto = require('crypto');

describe('api', () => {
  describe('POST /api/auth', async () => {
    const info = {
      email: `${await crypto.randomBytes(20).toString('hex')}@gmail.com`,
      password: '12345678',
      userName: await crypto.randomBytes(20).toString('hex')
    };
    describe('/signup', () => {
      it('signup should return a user', async () => {
        const res = await fetch('http://localhost:3000/api/auth/signup', {
          method: 'POST',
          body: JSON.stringify(info),
          headers: { 'Content-Type': 'application/json' }
        });
        const { user } = await res.json();
        assert.equal(res.status, 201);
        assert.equal(info.email, user.email);
        assert.equal(info.userName, user.userName);
        expect(user).to.haveOwnProperty('password');
        expect(user).to.haveOwnProperty('_id');
      });
    });
    describe('/login', async () => {
      it('login should return a user', async () => {
        const res = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          body: JSON.stringify(info),
          headers: { 'Content-Type': 'application/json' }
        });
        const { user } = await res.json();
        assert.equal(res.status, 200);
        assert.equal(info.email, user.email);
        assert.equal(info.userName, user.userName);
        expect(user).to.haveOwnProperty('password');
        expect(user).to.haveOwnProperty('_id');
      });
    });
    describe('/logout', async () => {
      it('logout should return status 200 OK', async () => {
        const res = await fetch('http://localhost:3000/api/auth/logout');

        assert.equal(res.status, 200);
      });
    });
  });
});
