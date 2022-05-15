import { compareAsc, isValid, parseISO } from "date-fns"

function compareAny(value: any, otherValue: any): number {
    if (value === '' && otherValue === '') {
        return 0
    }

    const date: Date = parseISO(value)
    if (isValid(date)) {
        const otherDate: Date = parseISO(otherValue)

        return compareAsc(date, otherDate)
    } else if (isNaN(value)) {
        const text: string = String(value)
        const otherText: string = String(otherValue)

        if (text === otherText) {
            return 0
        }

        return text > otherText ? 1 : -1
    } else {
        const numericValue: number = parseFloat(value)
        const otherNumericValue: number = parseFloat(otherValue)

        if (numericValue === otherNumericValue) {
            return 0
        }

        return numericValue > otherNumericValue ? 1 : -1
    }
}

export { compareAny }