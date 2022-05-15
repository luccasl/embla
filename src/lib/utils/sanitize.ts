function sanitizeRegexString(value: string): string {
    return value.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')
}

export { sanitizeRegexString }