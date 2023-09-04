// 1.Provider
// 2. Store
// 3. Reducer
// 4. Action


//Store = State
//Action = Button click 
//Reducer = updates the state
//Provider = React 

import { createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE ={   
        cartList:[],
        cartCount:0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState:INITIAL_STATE,
    reducers:{
        addToCart:(state)=>{
            state.cartCount = 1;
        },
        increment:(state)=>{
            state.cartCount += 1;
        },
        decrement:(state)=>{
            state.cartCount -= 1;
        },
    }
})

export const {addToCart,increment,decrement} = cartSlice.actions;

export default cartSlice.reducer;