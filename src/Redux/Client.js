import { createSlice } from "@reduxjs/toolkit";
const ClientAuth=createSlice({
    name:'Client',
    initialState:{
     NewFlowData:[],   
       NewflowModal:false,
          
    },
    reducers:{
        setNewflowModal:function(state,action){
            state.NewflowModal=action.payload
        },
        setNewFlowData:function(state,action){
            state.NewFlowData=action.payload
        }
    }
})

export const {setNewflowModal,setNewFlowData}=ClientAuth.actions
export const Clientreducer=ClientAuth.reducer