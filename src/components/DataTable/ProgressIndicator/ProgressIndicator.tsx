import { ProgressBar } from "./ProgressBar"
import { ProgressIndicatorComponent } from "./ProgressIndicatorComponent"
import { ProgressIndicatorContainer } from "./ProgressIndicatorContainer"

type ProgressIndicatorProps = {
    loading?: boolean
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
    loading = false,
}) => {
    return (
        <ProgressIndicatorContainer>
            <ProgressIndicatorComponent loading={loading}>
                <ProgressBar />
            </ProgressIndicatorComponent>
        </ProgressIndicatorContainer>
    )
}

export { ProgressIndicator }