import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import { SearchBarContainer } from "./SearchBarContainer";

const SearchIcon = styled(MdSearch)`
    position: absolute;
    left: 0.5rem;
    top: 0;
    color: #777;
    height: 100%;

    ${SearchBarContainer}:focus-within>& {
        display: none;
    }
`

export { SearchIcon }