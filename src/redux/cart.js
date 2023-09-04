// 1.Provider
// 2. Store
// 3. Reducer
// 4. Action


//Store = State
//Action = Button click 
//Reducer = updates the state
//Provider = React 



import { createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const fetchuser = createAsyncThunk("cart/fetchuser",async (id)=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    console.log(response.data)
    return response.data
})


const INITIAL_STATE ={   
        cartList:[],
        cartCount:0,
        userDetail:[],
}

const cartSlice = createSlice({
    name:"cart",
    initialState:INITIAL_STATE,
    reducers:{
        addToCart:(state,action)=>{
            // state.cartCount = 1;
            const itemExist = state.cartList.find((item)=>item.id === action.payload.id)
            if(itemExist){
                state.cartList.forEach((item)=>{
                    if(item?.id === action.payload.id){
                        item.count=1
                    }
                   });
                   return;
            }
                state.cartList.push({...action.payload,count:1})
            
           
            // console.log(action.payload);
            // console.log(cartList);
        },
        increment:(state,action)=>{
           const productID = action.payload
           state.cartList.forEach((item)=>{
            if(item?.id==productID){
                item.count++
            }
           })
        },
        decrement:(state,action)=>{
            const productID=action.payload
            state.cartList.forEach((item)=>{
                if(item?.id==productID){
                    item.count--
                }
            })
        },
    },
    extraReducers:{
        [fetchuser.pending]:(state,action)=>{
            console.log("Loading Start")
        },
        [fetchuser.fulfilled]:(state,action)=>{
            console.log("Loading End");
            console.log("Success");
            console.log(action.payload ,"payload")
            state.userDetail.push(action.payload)
        },
        [fetchuser.rejected]:(state,action)=>{
            console.log("Loading End");
            console.log("Error");
        }
    }
})

export const {addToCart,increment,decrement} = cartSlice.actions;

export default cartSlice.reducer;