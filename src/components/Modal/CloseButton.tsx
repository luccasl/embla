import { CloseIcon } from "./CloseIcon"

type CloseButtonProps = {
    onClick?: () => void
}

const CloseButton: React.FC<CloseButtonProps> = ({
    onClick,
}) => {
    return (
        <CloseIcon
            onClick={onClick}
            size={21} />
    )
}

export { CloseButton }