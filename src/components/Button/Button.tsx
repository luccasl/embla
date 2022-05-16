import { MdCircle, MdOutlineCircle } from "react-icons/md"
import { ButtonContainer } from "./ButtonContainer"
import { Spinner } from "./Spinner"

type ButtonProps = {
    caption?: string
    onClick?: (event: React.MouseEvent) => void
    loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
    caption = '',
    onClick = (event: React.MouseEvent) => null,
    loading = false,
}) => {
    return (
        <ButtonContainer onClick={onClick} loading={loading}>
            <Spinner size='1.5rem' loading={loading} />
            <span>
                {caption}
            </span>
        </ButtonContainer>
    )
}

export { Button }