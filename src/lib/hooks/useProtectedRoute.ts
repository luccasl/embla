import { useRouter } from "next/router"
import { useEffect } from "react"
import useLogin, { UseLoginProperties } from "./useLogin"

function useProtectedRoute() {
    const [ accessToken, ]: UseLoginProperties = useLogin()
    const router = useRouter()

    useEffect(() => {
        if (accessToken !== '') {
            return
        }

        router.replace('/')
    }, [ accessToken ])
}

export default useProtectedRoute