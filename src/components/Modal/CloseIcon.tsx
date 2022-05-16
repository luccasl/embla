import { MdClose } from "react-icons/md"
import styled from "styled-components"

const CloseIcon = styled(MdClose)`
    color: ${props => props.theme.colors.border};

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.bold}
    }
`

export { CloseIcon }