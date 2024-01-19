import React, { useCallback, useEffect, useRef, useState } from "react";
import CustomNodeQuestion from "./CustomNodes/CostumNodeQestion";
import CustomNodeMessage from "./CustomNodes/CostumNodeMessage";
import CustomNodeCondition from "./CustomNodes/CostumNodeCondition";
import CustumEdge from "./CustomNodes/CostumEdge";
import CustomNodes from "./CustomNodes/CustomNodes";
import CostomNodeModal from './CustomNodes/CustomNodesModal'
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
const edgeTypes = {
  edge: CustumEdge,
};
const nodeTypes = {
  question: CustomNodeQuestion,
  message: CustomNodeMessage,
  condition: CustomNodeCondition,
  custom:CustomNodes,
};
import "reactflow/dist/style.css";

// import { } from "../../../Redux/Client";
import ConditionModal from "./ConditionModal";
import {
  setCopyNode,
  setDeleteEdge,
  setHoverEdge,
  setSendMessage,
} from "../../../Redux/Client";
function Newflow({
  nodes,
  setNodes,
  onNodesChange,
  edges,
  setEdges,
  onEdgesChange,
}) {
  const dispatch = useDispatch();
  const {
    questionModal,
    conditionModal,
    SendMessage,
    DeleteNode,
    CopyNode,
    DeleteEdge,
    customNodesModal
  } = useSelector((state) => state.Client);

  const edgeUpdateSuccessful = useRef(true);
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
  const onEdgeUpdateEnd = (_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }
    edgeUpdateSuccessful.current = true;
  };

  console.log(nodes, "", edges);
  useEffect(() => {
    setEdges(
      edges.map((item) => {
        return {
          ...item,
          type: "edge",
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

  useEffect(() => {
    if (DeleteNode) {
      setNodes(
        nodes.filter((item) => {
          return item.id !== DeleteNode;
        })
      );
      setEdges(
        edges.filter((item) => {
          return DeleteNode !== item.target
            ? DeleteNode !== item.source
              ? true
              : false
            : false;
        })
      );
    }
  }, [DeleteNode]);
  useEffect(() => {
    if (CopyNode) {
      const node = nodes.filter((item) => item.id == CopyNode);
      setNodes([
        ...nodes,
        {
          data: node[0].data,
          position: { x: node[0].position.x + 70, y: node[0].position.y + 70 },
          id: Date.now() + "",
          type: node[0].type,
        },
      ]);
      dispatch(setCopyNode(""));
    }
  }, [CopyNode]);

  useEffect(() => {
    if (SendMessage?.id) {
      setNodes(
        nodes.map((item) => {
          if (item.id == SendMessage.id) {
            return { ...item, data: SendMessage.data };
          } else {
            return item;
          }
        })
      );
      dispatch(setSendMessage({}));
    }
  }, [SendMessage]);
  function EdgeEnter(_, edge) {
    dispatch(setHoverEdge(edge.id));
  }
  useEffect(() => {
    if (DeleteEdge) {
      setEdges(edges.filter((item) => item.id !== DeleteEdge));
      dispatch(setDeleteEdge(""));
    }
  }, [DeleteEdge]);

  return (
    <>
      {questionModal ? <Modal nodes={nodes} setNodes={setNodes} /> : ""}
      {conditionModal ? (
        <ConditionModal nodes={nodes} setNodes={setNodes} />
      ) : (
        ""
      )}
      {customNodesModal?<CostomNodeModal/>:""}
      <div className="flex flex-grow ">
        <ReactFlow
          style={{ zIndex: 1 }}
          onEdgeUpdateStart={onEdgeUpdateStart}
          onEdgeUpdate={onEdgeUpdate}
          onEdgeUpdateEnd={onEdgeUpdateEnd}
          // onDragEnd={(e)=>console.log(e)}
          // onDragExit={}
          // onDragOver={(e)=>console.log(1)}
          onDragStart={() => console.log(2)}
          nodes={nodes}
          edges={edges}
          // onNodeDragStop={updateNodeINRedux}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onEdgeMouseEnter={EdgeEnter}
          onEdgeMouseLeave={() => dispatch(setHoverEdge(""))}
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
