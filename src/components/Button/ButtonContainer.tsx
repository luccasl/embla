import styled from "styled-components"

type ButtonContainerProps = {
  loading?: boolean
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 0.2rem;
  background-color: ${props => props.loading ? props.theme.colors.border : props.theme.colors.primary};
  height: 3rem;
  border: ${props => 'none'};
  border-color: ${props => 'transparent'};
  box-shadow: 0 .1rem .2rem ${props => props.theme.colors.shadow};
  color: ${props => props.theme.colors.light};
  font-size: 1rem;
  font-weight: semi-bold;

  transition-property: box-shadow background-color;
  transition-duration: 200ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    box-shadow: 0 .2rem .8rem ${props => props.theme.colors.shadow};
  }
`

export { ButtonContainer }