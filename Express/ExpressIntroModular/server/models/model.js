const faker = require('faker');

class FakeThing {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
    }
}

module.exports = FakeThing