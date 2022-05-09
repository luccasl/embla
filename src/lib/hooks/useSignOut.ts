import { useRouter } from "next/router"
import { setAccessToken } from "../reducers/authReducer"
import { useAppDispatch } from "../store/hooks"

function useSignOut() {
    const dispatch = useAppDispatch()

    const router = useRouter()

    const signOut = () => {
        dispatch(setAccessToken(''))

        router.replace('/')
    }

    return signOut
}

export default useSignOut