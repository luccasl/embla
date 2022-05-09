import { useEffect, useState } from "react"

type WindowSize = {
    width: number,
    height: number,
}

enum WindowDimensions {
    Small,
    Medium,
    Large,
}

function useGetDimensions() {
    const [ windowSize, setWindowSize ] = useState<WindowSize>()
    const [ windowDimensions, setWindowDimensions ] = useState<WindowDimensions>(WindowDimensions.Small)

    useEffect(() => {
        if (typeof window === undefined) {
            return
        }

        const onResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', onResize)

        onResize()

        return () => window.removeEventListener('resize', onResize)
    }, [])

    useEffect(() => {
        if (!windowSize) {
            return
        }

        if (windowSize.width > 1000) {
            setWindowDimensions(WindowDimensions.Large)
        } else if (windowSize.width > 743) {
            setWindowDimensions(WindowDimensions.Medium)
        } else {
            setWindowDimensions(WindowDimensions.Small)
        }
    }, [ windowSize ])

    return windowDimensions
}

export { WindowDimensions }

export default useGetDimensions