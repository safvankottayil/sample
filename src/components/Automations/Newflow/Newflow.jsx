import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  Background,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";
const initialNodes = [
  { id: "1", position: { x: 40, y: 40 }, data: { label: "1" } },
  { id: "2", position: { x: 500, y: 400 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

function Newflow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <div className="flex flex-grow ">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background variant="lines" gap={30} size={5} />{" "}
      </ReactFlow>
    </div>
  );
}

export default Newflow;
