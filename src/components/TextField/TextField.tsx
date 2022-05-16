import { TextFieldContainer } from "./TextFieldContainer"
import { TextFieldTitle } from "./TextFieldTitle"
import { TextFieldValue } from "./TextFieldValue"

type TextFieldProps = {
    title?: string
    value?: string
}

const TextField: React.FC<TextFieldProps> = ({
    title,
    value
}) => {
    return (
        <TextFieldContainer>
            <TextFieldTitle>
                {title}
            </TextFieldTitle>
            <TextFieldValue>
                {value}
            </TextFieldValue>
        </TextFieldContainer>
    )
}

export { TextField }