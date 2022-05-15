import { compareAny } from './sort'

const comparisonString = 'walter'
const otherComparisonString = 'jones'
const comparisonNumber = 7
const otherComparisonNumber = 223
const comparisonDate = '2021-09-18T19:00:52Z'
const otherComparisonDate = '2021-10-27T19:00:52Z'

test('should ignore empty string', () => {
    expect(compareAny('', ''))
        .toBe(0)
})

test('should be able to compare strings in descending order', () => {
    expect(compareAny(comparisonString, otherComparisonString))
        .toBe(1)
})

test('should be able to compare strings in ascending order', () => {
    expect(compareAny(otherComparisonString, comparisonString))
        .toBe(-1)
})

test('should identify equal strings', () => {
    expect(compareAny(comparisonString, comparisonString))
        .toBe(0)
})

test('should be able to compare numbers in ascending order', () => {
    expect(compareAny(otherComparisonNumber, comparisonNumber))
        .toBe(1)
})

test('should be able to compare numbers in descending order', () => {
    expect(compareAny(comparisonNumber, otherComparisonNumber))
        .toBe(-1)
})

test('should identify equal numbers', () => {
    expect(compareAny(comparisonNumber, comparisonNumber))
        .toBe(0)
})

test('should be able to compare dates in ascending order', () => {
    expect(compareAny(otherComparisonDate, comparisonDate))
        .toBe(1)
})

test('should be able to compare dates in descending order', () => {
    expect(compareAny(comparisonDate, otherComparisonDate))
        .toBe(-1)
})

test('should identify equal dates', () => {
    expect(compareAny(comparisonDate, comparisonDate))
        .toBe(0)
})