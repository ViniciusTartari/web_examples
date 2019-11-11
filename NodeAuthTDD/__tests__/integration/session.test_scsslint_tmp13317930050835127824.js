const request = require('supertest');

const app = require('../../src/app');
const {User} = require('../../src/app/models');

describe("Authentication", () => {
    it('should authenticate with valid credentials', async () => {
        const user = await User.create({
            name: 'Vinicius',
            email: 'vinitartari@gmail.com',
            password_hash: '123'
        })


    })
});
