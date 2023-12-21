import React from "react";
import "./customnode.css";
import BoldEdit from "../../Svgs/BoldEdit";
import QestionSvg from "../../Svgs/Newflow/QestionSvg";
import { Handle, Position } from "reactflow";
import { useDispatch, useSelector } from "react-redux";
import { setNewflowModal } from "../../../Redux/Client";
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
        <Handle type="target" position={Position.Left} id={id} />
        <div className="flex items-center space-x-2">
          <QestionSvg />
          <p className="font-inter text-black text-base font-medium">
            Question
          </p>
        </div>
        <div>
          <BoldEdit />
        </div>
      </div>
      {/*  */}
      {/* body */}
      <div onClick={() => dispatch(setNewflowModal(id))} className="node-body">
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
              ? data.answers.map((item) => {
                  return (
                    <>
                      <button className=" relative node-qes-btn text-black-abz-14 w-full">
                        {item}
                        <Handle
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
