import styled from "styled-components";

type SpinnerProps = {
    size: string
    loading?: boolean
}

const Spinner = styled.div<SpinnerProps>`
    margin-right: 0.25rem;
    width: ${props => props.size};
    height: ${props => props.size};

    border: 0.25rem solid transparent;
    border-top: 0.25rem solid ${props => props.theme.colors.light};
    border-radius: 50%;

    animation-name: spin;
    animation-duration: 700ms;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.55, 0.55, 0.68, 0.53);

    display: ${props => props.loading ? 'inline-block' : 'none'};

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`

export { Spinner }