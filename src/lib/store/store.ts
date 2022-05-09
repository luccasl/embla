import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../reducers/authReducer"
import customersReducer from "../reducers/customersReducer"

const store = configureStore({
    reducer: {
        auth: authReducer,
        customers: customersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export { store }