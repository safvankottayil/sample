import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setNewFlowData, setNewflowModal } from "../../../Redux/Client";
import Editer from "../../Editer2/Editer2";
import "./customnode.css";
import AddSvg from "../../Svgs/Newflow/AddSvg";
import DeleteSvg from "../../Svgs/DeleteSvg";
export default function Modal() {
  const dispatch = useDispatch();
  // dispatch(setNewFlowData([]));
  // dispatch(setNewflowModal(false))
  const { NewFlowData, NewflowModal } = useSelector((state) => state.Client);
  // console.log(NewFlowData);
  const data =NewFlowData?NewFlowData.filter((item) => item.id == NewflowModal):[]
  console.log(data[0].data);
  const [answer, setAnswer] = useState(data[0]?.data?.answers?data[0].data.answers:[]);
  const AnswerRef = useRef(null);
  const currectAnswerRef = useRef(null);
  const [EditorText, setEditText] = useState(data[0]?data[0]?.data?.question:[]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    currectAnswerRef.current.value=data[0]?.data?.answer?data[0]?.data?.answer:''
  }, []);
  useEffect(()=>{EditorText})
  function handleSubmit() {
    let item = JSON.parse(JSON.stringify(data));
    item[0].data = {
      question: EditorText,
      answers: answer,
      answer: currectAnswerRef.current.value,
    };
    console.log(data);
    let allData = JSON.parse(JSON.stringify(NewFlowData));
     console.log(item[0]);
    let newData = allData.map((item2) => {
      if (item2.id == NewflowModal) {
        return item[0];
      } else {
        return item2;
      }
    });
    newData = JSON.parse(JSON.stringify(newData));
    console.log(newData, "-------------------------");
    dispatch(setNewFlowData(newData));
    dispatch(setNewflowModal(false))
  }
  return (
    <div className="flex fixed w-full top-0 left-0 z-50 justify-center items-center h-screen bg-black bg-opacity-40">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex w-[500px] max-h-[80vh] overflow-y-auto dashbord-scroll-bar bg-white rounded-lg min-h-96"
      >
        <div className="flex flex-col w-full p-6">
          <div className="flex items-start border-b">
            <h1 className="text-black-int-16-600 pb-4">Set a question</h1>
          </div>
          <div className="flex flex-col w-full px-1 border-b pb-4 ">
            <label htmlFor="message" className="pb-1 text-black-abz-14 pt-4">
              Question text
            </label>

            <Editer
              initiolState={EditorText}
              SetInitiolState={setEditText}
              save={update}
            />
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
            <div className="flex flex-col">
              <h1 className="pb-1 text-black-abz-14 pt-4">
                Save Answers in a variable
              </h1>
              <input
                ref={currectAnswerRef}
                type="text"
                className="flex w-full modal-input focus:outline-none"
              />
            </div>
            <div className="py-2 flex justify-end space-x-3">
              <button
                onClick={() => dispatch(setNewflowModal(false))}
                className="px-4 py-2  rounded-md border-2 border-blue-500 text-blue-500 flex items-center justify-center"
              >
                <p>Cancel</p>
              </button>
              <button
                onClick={() => {
                  setUpdate(update + 1), handleSubmit();
                }}
                className=" px-4 py-2 bg-blue-500 text-white rounded-md flex items-center justify-center"
              >
                Save
              </button>
            </div>
          </div>
          {/*  */}
        </div>
      </motion.div>
    </div>
  );
}
