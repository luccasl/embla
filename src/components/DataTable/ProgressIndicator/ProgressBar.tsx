import styled from "styled-components";

const ProgressBar = styled.div`
    position: relative;
    height: 100%;
    width: 2rem;
    background-color: ${props => props.theme.colors.primary};
    will-change: left, width, opacity;
    animation-name: indeterminate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.165, 0.24, 0.24, 0.3);

    @keyframes indeterminate {
        0% {
            left: -60rem;
            width: 30rem;
            opacity: 100%;
        }

        60% {
            left: 50%;
            width: 15rem;
            opacity: 70%;
        }

        100% {
            left: 100%;
            width: 50rem;
            opacity: 100%;
        }
    }
`

export { ProgressBar }