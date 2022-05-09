const validator = require('./validateEmailAddress')

const invalidEmail = 'jorge1ong4úmig'
const validEmail = 'test@company.com'

test('empty email address should be invalid', () => {
    expect(validator.validateEmailAddress(''))
        .toBe(false)
})

test('should identify invalid email address', () => {
    expect(validator.validateEmailAddress(invalidEmail))
        .toBe(false)
})

test('should identify valid email address', () => {
    expect(validator.validateEmailAddress(validEmail))
        .toBe(true)
})