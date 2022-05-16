import styled from "styled-components";

type ModalFrameProps = {
    enabled: boolean
}

const ModalFrame = styled.div<ModalFrameProps>`
    background-color: #fff;
    max-width: 30rem;
    flex: 1;
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 1rem 2rem ${props => props.theme.colors.shadow};
    z-index: 100;
`

export { ModalFrame }