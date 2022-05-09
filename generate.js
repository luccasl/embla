module.exports = function() {
    const faker = require('faker')
    const _ = require('lodash')

    return {
        clientes: _.times(100, (index) => ({
            id: index,
            nome: faker.name.findName(),
            data: faker.date.past(10),
            documento: faker.random.arrayElement([
                faker.internet.password(11, false, /^[0-9]*$/),
                faker.internet.password(14, false, /^[0-9]*$/),
            ]),
            banco: faker.company.companyName(),
            agencia: faker.random.number({ max: 999 }),
            conta: faker.finance.account(),
        }))
    }
}