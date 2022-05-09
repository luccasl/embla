import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store/store"

type AuthState = {
    accessToken: string,
    authError: string,
}

const initialState: AuthState = {
    accessToken: '',
    authError: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload
            state.authError = ''
        },
        setAuthError: (state, action: PayloadAction<string>) => {
            state.authError = action.payload
            state.accessToken = ''
        },
    }
})

export const { setAccessToken, setAuthError } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer