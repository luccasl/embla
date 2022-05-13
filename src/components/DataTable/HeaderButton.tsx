import styled from "styled-components";

const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;

  &:hover {
    cursor: pointer;
  }

  &:nth-child(1) {
    color: #777;
  }

  &:hover:nth-child(1) {
    color: #000;
  }
`;

export { HeaderButton }