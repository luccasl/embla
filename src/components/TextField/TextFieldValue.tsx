import styled from "styled-components"

const TextFieldValue = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.colors.lightText};
    background-color: ${props => props.theme.colors.inputBackground};
    border-radius: 1rem;
    padding: 0.25rem 0.5rem;
`

export { TextFieldValue }