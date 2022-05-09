import { lighten } from "@mui/material"
import { MdLogout } from "react-icons/md"
import styled from "styled-components"
import useSignOut from "../../lib/hooks/useSignOut"

const SignOut = styled.button`
    border: none;
    background-color: transparent;
    text-align: left;
    border-top: 1px solid ${props => props.theme.colors.border};
    margin-top: 2rem;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    color: ${props => lighten(props.theme.colors.link, 0.2)};
    font-size: 0.9rem;

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.link};
    }

    svg {
        margin-right: 1rem;
        fill: ${props => props.theme.colors.link};
    }
`

const SignOutButton: React.FC = () => {
    const signOut = useSignOut()
    
    return (
        <SignOut onClick={ signOut }>
            <MdLogout size={ 21 } />
            Encerrar sessão
        </SignOut>
    )
}

export { SignOutButton }