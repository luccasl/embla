const formatCpfCnpj = (value: string) => {
    if (value.length > 11) {
        return formatCnpj(value)
    }

    return formatCpf(value)
}

const formatCpf = (value: string): string => {
    const cpfDigitGroups = value.match(/^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})$/)

    if (!cpfDigitGroups) {
        return value
    }

    const firstGroup = cpfDigitGroups[1]
    const secondGroup = cpfDigitGroups[2]
    const thirdGroup = cpfDigitGroups[3]
    const fourthGroup = cpfDigitGroups[4]

    return  [[ firstGroup, secondGroup, thirdGroup ].join('.'),
        fourthGroup,
    ].join('-')
}

const formatCnpj = (value: string): string => {
    const cpfDigitGroups = value.match(/^([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})([0-9]{2})$/)

    if (!cpfDigitGroups) {
        return value
    }

    const firstGroup = cpfDigitGroups[1]
    const secondGroup = cpfDigitGroups[2]
    const thirdGroup = cpfDigitGroups[3]
    const fourthGroup = cpfDigitGroups[4]
    const fifthGroup = cpfDigitGroups[5]

    let cnpj = [ firstGroup, secondGroup, thirdGroup ].join('.')
    
    cnpj = [ cnpj, fourthGroup ].join('/')

    return [ cnpj, fifthGroup ].join('-')
}

export { formatCpfCnpj }