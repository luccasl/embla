import styled from "styled-components"

const Button = styled.button<{
    secondary?: boolean,
}>`
  border-radius: 0.2rem;
  background-color: ${props => props.secondary ? 'transparent' : props.theme.colors.primary};
  height: 3rem;
  border: ${props => props.secondary ? `1px solid` : 'none'};
  border-color: ${props => props.secondary ? props.theme.colors.primary : 'transparent'};
  box-shadow: 0 .1rem .2rem rgba(0, 0, 0, .2);
  color: ${props => props.secondary ? props.theme.colors.primary : props.theme.colors.light};
  font-size: 1rem;
  font-weight: semi-bold;
`

export { Button }