import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setNewFlowData, setNewflowModal } from "../../../Redux/Client";
import "./customnode.css";

import AddSvg from "../../Svgs/Newflow/AddSvg";
import DeleteSvg from "../../Svgs/DeleteSvg";
export default function Modal() {
  const dispatch = useDispatch();

  const { NewFlowData, NewflowModal } = useSelector((state) => state.Client);
  console.log(NewFlowData);
  const data = NewFlowData.filter((item) => item.id == NewflowModal);
  const [answer, setAnswer] = useState([]);
  const AnswerRef = useRef(null);
  console.log(answer, "");
  return (
    <div className="flex fixed w-full top-0 left-0 z-50 justify-center items-center h-screen bg-black bg-opacity-40">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex w-[500px] bg-white rounded-lg min-h-96"
      >
        <div className="flex flex-col w-full p-6">
          <div className="flex items-start border-b">
            <h1 className="text-black-int-16-600 pb-4">Set a question</h1>
          </div>
          <div className="flex flex-col w-full px-1 border-b pb-4 ">
            <label htmlFor="message" className="pb-1 text-black-abz-14 pt-4">
              Question text
            </label>
            <textarea
              cols={10}
              type="text"
              className="modal-input w-full focus:outline-none"
            ></textarea>
          </div>
          {/*  */}
          {/* Answers */}
          <div className="flex flex-col">
            <h1 className="text-black-abz-14 pt-4 pb-1">Answer Options</h1>
            <div className="flex flex-col space-y-3">
              {answer.map((item, i) => {
                return (
                  <>
                    <div className="flex justify-between relative w-full">
                      <input
                        onChange={(e) =>
                          setAnswer(
                            answer.map((item2, index) => {
                              if (item == item2 && i == index) {
                                return e.target.value;
                              } else {
                                return item2;
                              }
                            })
                          )
                        }
                        Value={item}
                        className="modal-input w-full flex justify-between"
                      />
                      {/* <p className="text-black-abz-14"></p> */}
                      <div
                        onClick={() => {
                          setAnswer(
                            answer.filter((item2, index) => {
                              if (item == item2 && i == index) {
                                return "";
                              } else {
                                return item2;
                              }
                            })
                          );
                        }}
                        className="absolute right-3 top-3"
                      >
                        <DeleteSvg />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {/*  */}
          <div className="flex relative flex-col w-full px-1 border-b pb-4 ">
            <label htmlFor="message" className="pb-1 text-black-abz-14 pt-4">
              Add answer variant
            </label>
            <input
              ref={AnswerRef}
              type="text"
              className="modal-input w-full focus:outline-none"
            />
            <div
              onClick={() => {
                AnswerRef.current.value
                  ? setAnswer([...answer, AnswerRef.current.value])
                  : "",
                  (AnswerRef.current.value = "");
              }}
              className="flex absolute right-4 z-10 bg-white top-12"
            >
              <AddSvg />
            </div>
            <div className="py-2">
              <button onClick={()=>dispatch(setNewflowModal(false))} className="px-3 py-1  rounded-lg bg-blue-500 text-white flex items-center justify-center">
                <p>Close</p>
              </button>
            </div>
          </div>
          {/*  */}
        </div>
      </motion.div>
    </div>
  );
}
