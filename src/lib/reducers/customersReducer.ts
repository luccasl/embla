import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store/store"

type CustomersState = {
    data: any[]
}

const initialState: CustomersState = {
    data: []
}

const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        setCustomers: (state, action: PayloadAction<any[]>) => {
            state.data = action.payload
        }
    }
})

export const { setCustomers } = customersSlice.actions

export const selectCustomers = (state: RootState) => state.customers

export default customersSlice.reducer