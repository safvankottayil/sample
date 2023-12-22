import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./customnode.css";
import DropDown from "../../FilterDropDown/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { setconditionModal } from "../../../Redux/Client";
import VariableDropDown from "./VariableDropDown";
// import { dispatch } from "d3";

function ConditionModal({ nodes, setNodes }) {
  const { conditionModal } = useSelector((state) => state.Client);
  const data = nodes.filter((item) => item.id == conditionModal);
  const dispatch = useDispatch();
  const [AndOr, setAndOR] = useState("and");
  const [Condition, setCondition] = useState({});
  const [condition2Show, setCondition2Show] = useState(false);
  const [variablebtnShow, setVariableBtn] = useState(0);
  const [condition1, setCondition1] = useState("");
  const [condition2, setCondition2] = useState("");
  const [condition3, setCondition3] = useState("");
  const [condition4, setCondition4] = useState("");
  const [statement1, setStatement1] = useState("");
  const [statement2, setStatement2] = useState("");
  function handleSubmit() {
    setNodes(
      nodes.map((item) => {
        if (item.id == conditionModal) {
          return { ...item, data: Condition };
        } else {
          return item;
        }
      })
    );
    dispatch(setconditionModal(false));
  }
  useEffect(() => {
    if (data[0]) {
      let item1 = data[0]?.data?.item1;

      if (item1) {
        setCondition1(item1.condition1);
        setCondition2(item1.condition2);
        setStatement1(item1.statement);
      }
      if (data[0]?.data?.statement) {
        setCondition2Show(true);
        setAndOR(data[0]?.data?.statement);
      }
      let item2 = data[0]?.data?.item2;
      if (item2) {
        setStatement2(item2.statement);
        setCondition3(item2.condition1);
        setCondition4(item2.condition2);
      }
    }
  }, []);
  useEffect(() => {
    if (condition2Show) {
      setCondition({
        item1: { condition1, condition2, statement: statement1 },
        statement: AndOr,
        item2: {
          condition1: condition3,
          condition2: condition4,
          statement: statement2,
        },
      });
    } else {
      setCondition({ item1: { condition1, condition2, statement: statement1 } });
    }
  }, [
    condition1,
    condition2,
    condition2Show,
    condition3,
    condition4,
    AndOr,
    statement1,
    statement2,
  ]);
  console.log(Condition,statement2);
  return (
    <div className="flex w-full fixed bg-black top-0 bg-opacity-40 left-0 z-[100] h-screen justify-center items-center ">
      <motion.div className="flex w-[480px] p-6  max-h-[80vh] flex-col dashbord-scroll-bar overflow-y-auto  bg-white rounded-lg">
        <div className="flex flex-col border-b pb-4 pt-3 ">
          <div className="flex justify-start ">
            <h1 className="text-black font-inter text-lg font-semibold text-start">
              Set a condition
            </h1>
          </div>
        </div>
        {/* condition section */}
        <div className="flex flex-col w-full py-4">
          <label htmlFor="ifcondition">Set the condition(s)</label>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-grow relative space-x-2 w-full">
              <input
                value={condition1}
                onChange={(e) => setCondition1(e.target.value)}
                type="text"
                className=" w-full modal-input focus:outline"
              />
              <button
                onClick={() => setVariableBtn(1)}
                className="flex items-center justify-center px-4 text-white text-abz font-medium bg-blue-500 rounded-lg py-2"
              >
                Variables
              </button>
              {variablebtnShow == 1 ? (
                <div className="absolute right-0 top-12 z-50">
                  <VariableDropDown
                    setValue={setCondition1}
                    Show={setVariableBtn}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <DropDown
              value={statement1}
              setvalue={setStatement1}
              H={"h-11"}
              data={["Select", "Equel to"]}
            />
            <div className="flex flex-grow relative space-x-2 w-full">
              <input
                value={condition2}
                onChange={(e) => setCondition2(e.target.value)}
                type="text"
                className=" w-full modal-input focus:outline"
              />
              <button
                onClick={() => setVariableBtn(2)}
                className="flex items-center justify-center px-4 text-white text-abz font-medium bg-blue-500 rounded-lg py-2"
              >
                Variables
              </button>
              {variablebtnShow == 2 ? (
                <div className="absolute right-0 top-12 z-50">
                  <VariableDropDown
                    setValue={setCondition2}
                    Show={setVariableBtn}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {condition2Show == false ? (
          <div className="py-2">
            <button
              onClick={() => setCondition2Show(true)}
              className="flex px-4 py-2 font-abz font-medium border-dashed text-blue-500 border-blue-500 bg-blue-50 border rounded-lg "
            >
              +Add
            </button>
          </div>
        ) : (
          ""
        )}
        {condition2Show ? (
          <div className="flex justify-center py-5 items-center">
            <div className="flex w-40 h-12 rounded-lg  bg-slate-200 p-2 space-x-2">
              <button
                onClick={() => setAndOR("and")}
                className={`  w-1/2 ${
                  AndOr == "and" ? "bg-blue-500 text-white mr-2" : " "
                } rounded-md `}
              >
                And
              </button>
              <button
                onClick={() => setAndOR("or")}
                className={` w-1/2 ${
                  AndOr == "or"
                    ? "bg-blue-500 text-white"
                    : " ml-2  text-black border-2 "
                } rounded-md `}
              >
                OR
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        {condition2Show ? (
          <div className="flex flex-col w-full py-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-grow relative space-x-2 w-full">
                <input
                  value={condition3}
                  onChange={(e) => setCondition3(e.target.value)}
                  type="text"
                  className=" w-full modal-input focus:outline"
                />
                <button
                  onClick={() => setVariableBtn(3)}
                  className="flex items-center justify-center px-4 text-white text-abz font-medium bg-blue-500 rounded-lg py-2"
                >
                  Variables
                </button>
                {variablebtnShow == 3 ? (
                  <div className="absolute right-0 top-12 z-50">
                    <VariableDropDown
                      setValue={setCondition3}
                      Show={setVariableBtn}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <DropDown
                value={statement2}
                setvalue={setStatement2}
                H={"h-11"}
                data={["Select", "Equel to"]}
              />
              <div className="flex flex-grow relative space-x-2 w-full">
                <input
                  value={condition4}
                  onChange={(e) => setCondition4(e.target.value)}
                  type="text"
                  className=" w-full modal-input focus:outline"
                />
                <button
                  onClick={() => setVariableBtn(4)}
                  className="flex items-center justify-center px-4 text-white text-abz font-medium bg-blue-500 rounded-lg py-2"
                >
                  Variables
                </button>
                {variablebtnShow == 4 ? (
                  <div className="absolute right-0 top-12 z-50">
                    <VariableDropDown
                      setValue={setCondition4}
                      Show={setVariableBtn}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="py-4">
              <button
                onClick={() => setCondition2Show(false)}
                className="flex rounded-lg items-center justify-center w-full py-2 border border-dashed border-red-500 bg-red-50 text-red-500"
              >
                Delete condition
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* ---------------- */}
        <div className="flex w-full items-center justify-end space-x-2 py-4  ">
          <button
            onClick={() => dispatch(setconditionModal(false))}
            className="px-4 py-2 rounded-md border-2 border-blue-600 text-blue-600 font-inter"
          >
            Cancel
          </button>
          <button
            onClick={() => handleSubmit()}
            className="px-4 py-2 rounded-md border-2 border-blue-600 bg-blue-600 text-white font-inter"
          >
            Save
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ConditionModal;
