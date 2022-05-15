import styled from "styled-components";
import { media } from "../../../styles/responsive";

const SearchBarContainer = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;

  ${media.tablet} {
    flex: 1;
    max-width: 40ch;
  }

  input {
    border: none;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: transparent;
    height: 1.5rem;
    width: 100%;
    z-index: 10;
    color: #333;
    font-size: 1rem;
  }

  input {
    border-radius: 1rem;
  }

  div.badges {
    position: absolute;
    left: 0;
    top: 0;
    padding-left: 2rem;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  }
`

export { SearchBarContainer }