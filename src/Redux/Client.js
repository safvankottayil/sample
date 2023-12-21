import { createSlice } from "@reduxjs/toolkit";

const ClientAuth=createSlice({
    name:'Client',
    initialState:{
     NewFlowData:[],
     NewFlowEdge:[]  , 
       NewflowModal:false,
          
    },
    reducers:{
        setNewflowModal:function(state,action){
            state.NewflowModal=action.payload
        },
        setNewflowEdge:function(state,action){
            state.NewFlowEdge=action.payload
        },
        setNewFlowData:function(state,action){
            state.NewFlowData=action.payload
        }
    }
})

export const {setNewflowModal,setNewFlowData,setNewflowEdge}=ClientAuth.actions
export const Clientreducer=ClientAuth.reducer