import React, { useCallback, useEffect, useRef, useState } from "react";
import CustomNodeQuestion from "./CostumNodeQestion";
import CustomNodeMessage from "./CostumNodeMessage";
import CustomNodeCondition from "./CostumNodeCondition";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import ReactFlow, {
  useNodesState,
  Background,
  useEdgesState,
  addEdge,
  Controls,
  MarkerType,
  updateEdge,
} from "reactflow";
const nodeTypes = {
  question: CustomNodeQuestion,
  message: CustomNodeMessage,
  condition: CustomNodeCondition,
};
import "reactflow/dist/style.css";

// import { setNewFlowData,setNewflowEdge} from "../../../Redux/Client";
import ConditionModal from "./ConditionModal";
function Newflow({nodes, setNodes, onNodesChange,edges, setEdges, onEdgesChange}) {
  const dispatch = useDispatch();
  const { questionModal,conditionModal } = useSelector((state) => state.Client);

  const edgeUpdateSuccessful = useRef(true);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
    // updateNodeINRedux()
  }, []);
  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
    // updateNodeINRedux()
  }, []);
  const onEdgeUpdateEnd = (_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }
    // dispatch(setNewflowEdge(edges))
    edgeUpdateSuccessful.current = true;
    
  }
  // console.log(NewFlowEdge,'22222222222222');
  // useEffect(() => {
  //   if (NewFlowData) {
  //     setNodes(NewFlowData);
  //   }
  // }, [NewFlowData]);
// useEffect(()=>{
//   // if(NewFlowEdge){
//     // if(NewFlowEdge){
//       // dispatch(setNewflowEdge(NewFlowEdge))
//       setEdges(NewFlowEdge)
//     // }
//   // }
// },[])
console.log(nodes);
  useEffect(() => {
   
   
    // if(NewFlowEdge.length==edges.length-1){
      setEdges(
        edges.map((item) => {
          return {
            ...item,
            animated: true,
            markerEnd: {
              type: MarkerType.Arrow,
              width: 20,
              height: 20,
            },
            style: {
              strokeWidth: 2,
            },
          };
        })
      );
      // dispatch(setNewflowEdge(edges))
    // }
 
   
  }, [edges.length]);
 
  // function updateNodeINRedux(){
  //   dispatch(setNewFlowData(nodes))
  // }

  // function debounce(fn, delay) {
  //   let timer
  //   return function () {
  //     clearTimeout(timer)
  //     timer = setTimeout(()=>fn(), delay)
  //   }
  // }
  return (
    <>
      {questionModal? <Modal nodes={nodes} setNodes={setNodes} /> : ""}
      {conditionModal?<ConditionModal nodes={nodes} setNodes={setNodes}/>:''}
      <div className="flex flex-grow ">
        <ReactFlow
          onEdgeUpdateStart={onEdgeUpdateStart}
          onEdgeUpdate={onEdgeUpdate}
          onEdgeUpdateEnd={onEdgeUpdateEnd}
          // onDragEnd={(e)=>console.log(e)}
          // onDragExit={}
          // onDragOver={(e)=>console.log(1)}
          onDragStart={()=>console.log(2)}
          nodes={nodes}
          edges={edges}
          
          // onNodeDragStop={updateNodeINRedux}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          // fitView
        >
          <Background color={"#E1E1E1"} variant="lines" gap={50} size={5} />{" "}
          <Controls className="-rotate-90  translate-x-10" />
        </ReactFlow>
      </div>
    </>
  );
}

export default Newflow;
