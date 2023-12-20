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
import { setNewFlowData, setNewflowModal } from "../../../Redux/Client";
function Newflow() {
  const dispatch = useDispatch();
  const { NewflowModal, NewFlowData } = useSelector((state) => state.Client);
  const [modalShow, setModalShow] = useState(false);
  const edgeUpdateSuccessful = useRef(true);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);
  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);
  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }
    edgeUpdateSuccessful.current = true;
  }, []);

  useEffect(() => {
    if (NewFlowData) {
      setNodes(NewFlowData);
    }
  }, [NewFlowData?.length]);
  useEffect(() => {
    if (NewFlowData.length == nodes.length) {
      dispatch(setNewFlowData(nodes));
    }
  }, [nodes]);

  useEffect(() => {
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
  }, [edges.length]);

  return (
    <>
      {NewflowModal ? <Modal /> : ""}
      <div className="flex flex-grow ">
        <ReactFlow
          onEdgeUpdateStart={onEdgeUpdateStart}
          onEdgeUpdate={onEdgeUpdate}
          onEdgeUpdateEnd={onEdgeUpdateEnd}
          nodes={nodes}
          edges={edges}
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
