import { useState } from "react"
import { api } from "../api/api"
import { setAccessToken, setAuthError } from "../reducers/authReducer"
import { useAppDispatch, useAppSelector } from "../store/hooks"

type UseLoginProperties = [
    accessToken: string,
    login: (email: string, password: string) => Promise<void>,
    loading: boolean
]

function useLogin(): UseLoginProperties {
    const accessToken = useAppSelector(state => state.auth.accessToken)
    const dispatch = useAppDispatch()

    const [loading, setLoading] = useState<boolean>(false)

    async function login(email: string, password: string) {
        const params = {
            email,
            password
        }

        try {
            setLoading(true)

            const { data } = await api.post('/login', params)

            dispatch(setAccessToken(data.accessToken))
        } catch(error) {
            dispatch(setAuthError('E-mail e ou senha incorretos.'))
        } finally {
            setLoading(false)
        }
    }

    return [accessToken, login, loading]
}

export type { UseLoginProperties }

export default useLogin