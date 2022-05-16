import { CloseButton } from "./CloseButton"
import { ModalContainer } from "./ModalContainer"
import { ModalFrame } from "./ModalFrame"
import { ModalHeader } from "./ModalHeader"
import { ModalTitle } from './ModalTitle'
import { Overlay } from "./Overlay"

type ModalProps = {
    children: React.ReactNode
    onClickClose?: () => void
    title?: string
    enabled: boolean
}

const Modal: React.FC<ModalProps> = ({
    children,
    onClickClose,
    title = '',
    enabled = false,
}) => {
    return (
        <ModalContainer enabled={enabled}>
            <Overlay enabled={enabled} onClick={onClickClose} />
            <ModalFrame enabled={enabled}>
                <ModalHeader>
                    <ModalTitle>
                        {title}
                    </ModalTitle>
                    <CloseButton onClick={onClickClose} />
                </ModalHeader>
                {children}
            </ModalFrame>
        </ModalContainer>
    )
}

export { Modal }