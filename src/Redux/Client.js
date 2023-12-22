import { createSlice } from "@reduxjs/toolkit";

const ClientAuth = createSlice({
  name: "Client",
  initialState: {
    NewFlowData: [],
    NewFlowEdge: [],
    SendMessage: {},
    DeleteNode: "",
    DeleteEdge:"",
    CopyNode: "",
    HoverEdge:'',
    questionModal: false,
    conditionModal: false,
  },
  reducers: {
    setHoverEdge:function(state,action){
            state.HoverEdge=action.payload
    },
    setDeleteEdge: function (state, action) {
        state.DeleteEdge = action.payload;
      },
    setDeleteNode: function (state, action) {
      state.DeleteNode = action.payload;
    },
    setCopyNode: function (state, action) {
      state.CopyNode = action.payload;
    },
    setSendMessage: function (state, action) {
      state.SendMessage = action.payload;
    },
    setquestionModal: function (state, action) {
      state.questionModal = action.payload;
    },
    setconditionModal: function (state, action) {
      state.conditionModal = action.payload;
    },
    setNewflowEdge: function (state, action) {
      state.NewFlowEdge = action.payload;
    },
    setNewFlowData: function (state, action) {
      state.NewFlowData = action.payload;
    },
  },
});

export const {
  setconditionModal,
  setSendMessage,
  setCopyNode,
  setDeleteNode,
  setquestionModal,
  setNewFlowData,
  setNewflowEdge,
  setHoverEdge,setDeleteEdge
} = ClientAuth.actions;
export const Clientreducer = ClientAuth.reducer;
