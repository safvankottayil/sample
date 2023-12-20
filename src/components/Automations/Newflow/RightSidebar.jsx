import React from "react";
import "./newflow.css";
import Update from "../../Svgs/Newflow/Update";
import UpdateTag from "../../Svgs/Newflow/UpdateTag";
import Agent from "../../Svgs/Newflow/Agent";
import UpdateStatus from "../../Svgs/Newflow/UpdateStatus";
import TemplateSvg from "../../Svgs/Newflow/TemplateSvg";
import TimeDelay from "../../Svgs/Newflow/TimeDelay";
function RightSidebar({ nodes, setNodes }) {
  return (
    <div className="right-sidebar border-l p-4">
      {/* 3 conditions */}
      <div className="flex flex-col space-y-3">
        <div
          onClick={() =>
            setNodes([
              ...nodes,
              {
                id:nodes.length+'',
                position: { x:nodes.length * 40 + 10, y:nodes.length * 40 + 10, },
                type: "message",
                data: {
                  message: "Hey there!😄",
                  buttons: ["Message", "Video", "Image", "Document"],
                },
              },
            ])
          }
          className="new-flow-msg "
        >
          <h1 className="text-black-int-14-600">Message</h1>
          <p className="text-black-abz-12">
            Send message to the customer by attaching a video, image or
            document.
          </p>
        </div>
        <div
          onClick={() =>
            setNodes([
              ...nodes,
              {
                id: nodes.length + "",
                position: {
                  x: nodes.length * 40 + 10,
                  y: nodes.length * 40 + 10,
                },
                type: "question",
                data: {
                  label: "Hey this is FutureX. How can I help you today?",
                  options: ["Enroll in a course", "Pay Fee"],
                },
              },
            ])
          }
          className="new-flow-qes"
        >
          <h1 className="text-black-int-14-600">Question</h1>
          <p className="text-black-abz-12">
            Get an input from the user and store it in a variable.
          </p>
        </div>
        <div className="new-flow-con">
          <h1 className="text-black-int-14-600">Condition</h1>
          <p className="text-black-abz-12">
            Use logical conditions to determine what messages to send.
          </p>
        </div>
      </div>
      {/* 3 contions end */}
      <div className="flex flex-col items-start space-y-3">
        <h1 className="text-black-int-16-600">Advanced</h1>
        <div className="grid grid-cols-2 gap-2">
          <div className="new-flow-adv-item">
            <Update />
            <p className="text-black-abz-12">Update Attribute</p>
          </div>
          <div className="new-flow-adv-item">
            <UpdateTag />
            <p className="text-black-abz-12">Update Tag</p>
          </div>
          <div className="new-flow-adv-item">
            <Agent />
            <p className="text-black-abz-12">Assign Agent</p>
          </div>
          <div className="new-flow-adv-item">
            <UpdateStatus />
            <p className="text-black-abz-12">Update Chat Status</p>
          </div>
          <div className="new-flow-adv-item">
            <TemplateSvg />
            <p className="text-black-abz-12">Template</p>
          </div>
          <div className="new-flow-adv-item">
            <TimeDelay />
            <p className="text-black-abz-12">Time Delay</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
