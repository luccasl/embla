import styled from "styled-components";

type ProgressIndicatorComponentProps = {
    loading?: boolean
}

const ProgressIndicatorComponent = styled.div<ProgressIndicatorComponentProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: ${props => props.theme.colors.border};
    opacity: ${props => props.loading ? 1 : 0};
    transition-property: opacity;
    transition-duration: 300ms;
`

export { ProgressIndicatorComponent }