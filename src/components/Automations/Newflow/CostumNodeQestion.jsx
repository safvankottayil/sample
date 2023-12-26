import React from "react";
import "./customnode.css";
import BoldEdit from "../../Svgs/BoldEdit";
import QestionSvg from "../../Svgs/Newflow/QestionSvg";
import { Handle, Position } from "reactflow";
import { useDispatch, useSelector } from "react-redux";
import { setquestionModal,setDeleteNode,setCopyNode } from "../../../Redux/Client";
import DeleteSvg from "../../Svgs/DeleteSvg";
import CopySvg from "../../Svgs/CopySvg";
function CostumNodeQestion({ id, data }) {
  const dispatch = useDispatch();
  const { NewFlowData } = useSelector((state) => state.Client);
  const data2 = NewFlowData.filter((item) => {
    return item.id == id;
  });
  // console.log(data,'item');
  return (
    <div className="node-box ">
      {/* head */}
      <div className="node-head relative  node-bg-orenge w-full">
        <Handle className="h-[10px] w-[10px] bg-orange-300 " type="target" position={Position.Left} id={id} />
        <div className="flex items-center space-x-2">
          <QestionSvg />
          <p className="font-inter text-black text-base font-medium">
            Question
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div onClick={() => dispatch(setquestionModal(id))}> <BoldEdit /></div>
         
          <div onClick={()=>dispatch(setDeleteNode(id))}>
          <DeleteSvg/>
          </div>
          <div onClick={()=>dispatch(setCopyNode(id))}>
            <CopySvg/>
          </div>
        </div>
        <Handle className="h-[10px] w-[10px] bg-orange-300 " type="source" position={Position.Right} id={id} />
      </div>
      {/*  */}
      {/* body */}
      <div onClick={() => dispatch(setquestionModal(id))} className="node-body">
        <div className=" space-y-1 w-full">
          {data?.question?.map((item) => {
            return item.children.map((item2) => {
              if (item2.type == "list-item") {
                return (
                  <>
                    <ul className="list-disc pl-5  ">
                      {item2.children.map((item3) => {
                        return <li>{item3.text}</li>;
                      })}
                    </ul>
                  </>
                );
              }

              return <p className="text-black-abz-14">{item2.text}</p>;
            });
          })}

          <div className="flex flex-col space-y-2">
            {data?.answers
              ? data.answers.map((item,i) => {
                  return (
                    <>
                      <button className=" relative node-qes-btn text-black-abz-14 w-full">
                        {item}
                        <Handle
                        className="h-[10px] w-[10px] bg-orange-300"
                          type="source"
                          position={Position.Right}
                          id={item}
                        />
                      </button>
                    </>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CostumNodeQestion);
