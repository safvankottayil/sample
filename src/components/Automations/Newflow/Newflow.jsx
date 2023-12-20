import React, { useCallback, useEffect } from "react";
import CustomNodeQuestion from "./CostumNodeQestion";
import CustomNodeMessage from "./CostumNodeMessage";
import ReactFlow, {
  useNodesState,
  Background,
  useEdgesState,
  addEdge,
  Controls,
} from "reactflow";
const nodeTypes = {
  question: CustomNodeQuestion,
  message: CustomNodeMessage,
};
import "reactflow/dist/style.css";
const initialNodes = [
  {
    id: "1",
    position: { x: 40, y: 40 },
    type: "question",
    data: {
      label: "Hey this is FutureX. How can I help you today?",
      options: ["Enroll in a course", "Pay Fee"],
    },
  },
  {
    id: "2",
    position: { x: 500, y: 400 },
    type: "message",
    data: {
      message: "Hey there!😄",
      buttons: ["Message", "Video", "Image", "Document"],
    },
  },
];

function Newflow({Nodes,SetNodes}) {
  
  const [nodes, setNodes, onNodesChange] = useNodesState(Nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  useEffect(()=>{
    setNodes(Nodes)
  },[Nodes.length])
  useEffect(()=>{
    SetNodes(nodes)
  },[nodes])
  useEffect(() => {
    setEdges(
      edges.map((item) => {
        return { ...item, animated: true };
      })
    );
  }, [edges.length]);
  console.log(edges);
  // const edgesWithUpdatedTypes=edges.map(())
  return (
    <div className="flex flex-grow ">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background color={"#E1E1E1"} variant="lines" gap={30} size={5} />{" "}
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Newflow
