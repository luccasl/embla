import { configureStore, EnhancedStore } from "@reduxjs/toolkit"
import authReducer from "../reducers/authReducer"
import customersReducer from "../reducers/customersReducer"
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'

const rootReducer = combineReducers({
    auth: authReducer,
    customers: customersReducer,
})

const persistConfig = {
    key: 'auth',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store: EnhancedStore = configureStore({
    reducer: persistedReducer,
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export { store, persistor }