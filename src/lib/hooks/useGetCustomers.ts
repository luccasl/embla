import { useEffect, useState } from "react"
import { api } from "../api/api"
import { setCustomers } from "../reducers/customersReducer"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import useLogin, { UseLoginProperties } from "./useLogin"

function useGetCustomers() {
    const [ accessToken, ]: UseLoginProperties = useLogin()

    const customers = useAppSelector(state => state.customers.data)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if (accessToken === '') {
            return
        }

        getCustomers()
    }, [ accessToken ])

    async function getCustomers() {
        try {
            const { data } = await api.get('/customers', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })

            dispatch(setCustomers(data))
        } catch(error: any) {

        }
    }

    return customers
}

export default useGetCustomers