import { MdClose } from "react-icons/md";
import styled from "styled-components";

const StyledMdClose = styled(MdClose)`
    z-index: 30;

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.bold}
    }
`

export { StyledMdClose }