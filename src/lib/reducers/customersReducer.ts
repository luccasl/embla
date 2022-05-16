import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store/store"

type CustomersState = {
    data: any[]
    selectedCustomer: any
}

const initialState: CustomersState = {
    data: [],
    selectedCustomer: null
}

const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        setCustomers: (state: CustomersState, action: PayloadAction<any[]>) => {
            state.data = action.payload
        },
        
        setSelectedCustomer: (state: CustomersState, action: PayloadAction<any>) => {
            state.selectedCustomer = action.payload
        },
    }
})

export const { setCustomers, setSelectedCustomer } = customersSlice.actions

export const selectCustomers = (state: RootState) => state.customers

export default customersSlice.reducer