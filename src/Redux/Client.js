import { createSlice } from "@reduxjs/toolkit";

const ClientAuth=createSlice({
    name:'Client',
    initialState:{
     NewFlowData:[],
     NewFlowEdge:[]  , 
       questionModal:false,
       conditionModal:false  
    },
    reducers:{
        setquestionModal:function(state,action){
            state.questionModal=action.payload
        },
        setconditionModal:function(state,action){
            state.conditionModal=action.payload
        },
        setNewflowEdge:function(state,action){
            state.NewFlowEdge=action.payload
        },
        setNewFlowData:function(state,action){
            state.NewFlowData=action.payload
        }
    }
})

export const {setconditionModal,setquestionModal,setNewFlowData,setNewflowEdge}=ClientAuth.actions
export const Clientreducer=ClientAuth.reducer