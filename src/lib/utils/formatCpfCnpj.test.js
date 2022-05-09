const formatter = require('./formatCpfCnpj')

const invalidCpf = '478720238526'
const hugeNumber = '185185916817464176894768147681748674186728678467248674268472867481796513'
const validCpf = '27582323852'
const validCpfFormatted = '275.823.238-52'
const validCnpj = '64844246000122'
const validCnpjFormatted = '64.844.246/0001-22'

test('test if invalid cpf is ignored', () => {
    expect(formatter.formatCpfCnpj(invalidCpf))
        .toBe(invalidCpf)
})

test('test if huge number is ignored', () => {
    expect(formatter.formatCpfCnpj(hugeNumber))
        .toBe(hugeNumber)
})

test('test if empty string is ignored', () => {
    expect(formatter.formatCpfCnpj(''))
        .toBe('')
})

test('tests if valid cpf is formatted correctly', () => {
    expect(formatter.formatCpfCnpj(validCpf))
        .toBe(validCpfFormatted)
})

test('tests if valid cnpj is formatted correctly', () => {
    expect(formatter.formatCpfCnpj(validCnpj))
        .toBe(validCnpjFormatted)
})