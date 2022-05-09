function validateEmailAddress(email: string): boolean {
    if (email === '') {
      return false
    }

    if (!email.match(/^.+\@.+$/)) {
      return false
    }

    return true
}

export { validateEmailAddress }