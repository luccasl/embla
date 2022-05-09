import styled from "styled-components";

const Card = styled.div`
  max-width: 25rem;
  background-color: ${props => props.theme.colors.light};
  border-radius: .2rem;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 .2rem .2rem ${props => props.theme.colors.shadow};
  flex: 1;
`
export { Card }