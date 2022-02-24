import {createSlice} from '@reduxjs/toolkit'

export const citySlice = createSlice({
    name: 'city',
    initialState:{
        listOfCity : []
    },
    reducers:{
        addCity:(state, action) => {
            state.listOfCity.push(action.payload)
        }
    }
}); 
export const {addCity} = citySlice.actions

export default citySlice.reducer