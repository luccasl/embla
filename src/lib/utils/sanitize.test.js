import { sanitizeRegexString } from './sanitize'

const regexOperator = '.'
const escapedRegexOperator = '\\.'
const regularText = 'lorem ipsum'

test('test whether empty string is ignored', () => {
    expect(sanitizeRegexString(''))
        .toBe('')
})

test('test whether regex operator is escaped', () => {
    expect(sanitizeRegexString(regexOperator))
        .toBe(escapedRegexOperator)
})

test('test whether regular text is ignored', () => {
    expect(sanitizeRegexString(regularText))
        .toBe(regularText)
})