import styled from "styled-components"

const ErrorMessage = styled.p`
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.error};
    min-height: 1ch;
`

export { ErrorMessage }