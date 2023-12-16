import React, { useEffect, useRef, useState } from "react";
import "./newtemplate.css";
import NewTemplateDropDown from "./NewTemplateDropDown";
import SmailSvg from "../../Svgs/SmailSvg";
import ItalicSvg from "../../Svgs/ItalicSvg";
import UnderLineSvg from "../../Svgs/UnderLineSvg";
import BoldSvg from "../../Svgs/BoldSvg";
import MoreOptionSvg from "../../Svgs/MoreOptionSvg";
import Plusbgblue from "../../Buttons/Plusbgblue";
import BorderText_Blue from "../../Buttons/BorderText_Blue";
import AddBtnSvg from "../../Svgs/AddBtnSvg";
import Meadia from "./Meadia";
import CallToAction from "./CallToAction";
import WebLInk from "../../Svgs/WebLInk";
function NewTemplate() {
  const [image, setImage] = useState("");
  const [Head, setHeading] = useState("");
  const [Buttontype, SetButtonType] = useState("");
  const [Button, setButton] = useState("");
  const [bodytext, setBodytext] = useState("");
  const [textActive, setTextActive] = useState("");
  const [footerText, setFooterText] = useState("");
  const BodyRef = useRef(null);
  const FooterRef = useRef(null);
  const active = setInterval(() => {
    if (textActive == "body") {
      setBodytext(BodyRef.current.innerHTML);
    } else if (textActive == "footer") {
      setFooterText(FooterRef.current.innerHTML);
      console.log(FooterRef.current.innerHTML);
    }
  }, 0);
  textActive ? active : clearInterval(active);

  function BodyTextHandle() {
    // Remove <div> elements containing only <br> tags
    // const divsWithOnlyBr = container.querySelectorAll('div:only-child');
    // divsWithOnlyBr.forEach((div) => {
    // 	if (div.innerHTML.trim().toLowerCase() === '<br>') {
    // 		div.parentNode?.removeChild(div);
    // 	}
    // });
    // Remove consecutive <br> tags
    // const cleanedHtml = container.innerHTML.replace(/<br\s*\/?>\s*(<br\s*\/?>\s*)+/g, '<br>').trim();
    // setMessageInput(cleanedHtml);
    // console.log(cleanedHtml);
  }
  return (
    <div className="flex space-x-4 pb-16 ">
      <div className="new-template-form w-8/12">
        <div className="flex w-full space-x-2">
          <NewTemplateDropDown
            text={"Template name"}
            type={"input"}
            placeholder={"Template Name"}
          />
          <NewTemplateDropDown
            text={"Category"}
            data={["Select", "Marketing"]}
          />
          <NewTemplateDropDown
            text={"Language"}
            data={["Select", "English(US)"]}
          />
        </div>
        <div className="my-2 h-[1px] w-full bg-[#E1E1E1]"></div>
        {/* Heading */}
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex flex-col space-y-1">
            <h1 className="text-black-int-14">Heading</h1>
            <p className="text-gray-abz-14">
              Highlight your brand here, use images or videos to stand out.
            </p>
          </div>
          <div className="flex w-1/3">
            <NewTemplateDropDown
              setvalue={setHeading}
              data={["None", "Meadia"]}
            />
          </div>
          {/* Meadia Show */}
          <Meadia
            setImage={setImage}
            status={Head == "Meadia" ? true : false}
          />
          {/* - */}
        </div>
        <div className="my-2 h-[1px] w-full bg-[#E1E1E1]"></div>

        {/* ----------------------Body------------------------------- */}
        <div className="flex flex-col w-full space-y-3">
          {/* head */}
          <div className="flex flex-col space-y-1">
            <h1 className="text-black-int-14">Body</h1>
            <p className="text-gray-abz-14">
              Make your messages personal using variables like {`{(name)}`} and
              get more replies!
            </p>
          </div>
          {/* --- Edit- */}
          <div
            onChange={BodyTextHandle}
            onFocus={() => setTextActive("body")}
            onBlur={() => setTextActive("")}
            ref={BodyRef}
            contentEditable="true"
            className="new-broadcast-form-select-box w-full flex felx-col focus:outline-none min-h-[80px]"
          ></div>
          {/*  */}
          <div className="flex justify-between w-full">
            <div className="flex items-center space-x-3">
              <SmailSvg width={19} />
              <ItalicSvg />
              <BoldSvg />
              <UnderLineSvg />
              <MoreOptionSvg />
              <BorderText_Blue
                icon={<AddBtnSvg color={"#176AF2"} />}
                text={"Add variable"}
              />
            </div>
            <div className="flex items-start">
              <p className="text-gray-abz-12">500/2000</p>
            </div>
          </div>
          {/* text */}
        </div>
        {/* --------------------------------------------------------------- */}
        <div className="my-2 h-[1px] w-full bg-[#E1E1E1]"></div>
        {/* ----------------Footer--------------- */}
        <div className="flex flex-col w-full ">
          {/* head */}
          <div className="flex flex-col space-y-1">
            <h1 className="text-black-int-14">Footer</h1>
            <p className="text-gray-abz-14">
              Use footers to include any disclaimers or a nice post script.
            </p>
          </div>
          {/* --- */}
          {/* text */}
          <div
            onFocus={() => setTextActive("footer")}
            onBlur={() => setTextActive("")}
            contentEditable="true"
            ref={FooterRef}
            className="new-broadcast-form-select-box w-full min-h-[50px] mt-3"
          ></div>
          <div className="flex w-full justify-end items-start">
            <p className="text-gray-abz-12">36/60</p>
          </div>
        </div>
        {/* ------------------------------------ */}
        <div className="my-2 h-[1px] w-full bg-[#E1E1E1]"></div>
        {/*-------------- Bottons -------------- */}
        <div className="flex flex-col w-full">
          {/* head */}
          <div className="flex justify-between">
            <div className="flex flex-col space-y-1">
              <h1 className="text-black-int-14">Buttons</h1>
              <p className="text-gray-abz-14">
                Add up to 2 buttons that allow customers to communicate with you
                or take a step.
              </p>
            </div>
            <div className="flex">
              <BorderText_Blue
                text={"Add button"}
                icon={<AddBtnSvg color={"#176AF2"} />}
              />
            </div>
          </div>
          {/* body */}
          <div className="flex w-1/3 pt-3">
            <NewTemplateDropDown
              setvalue={SetButtonType}
              data={["None", "Call to action"]}
            />
          </div>
          {/* Show Add Button */}
          <CallToAction
            action={Button}
            setAction={setButton}
            status={Buttontype == "Call to action" ? true : false}
          />
          {/* ---------- */}
        </div>
        {/* Submit */}
        <div className="flex justify-end w-full items-start">
          <div className="flex space-x-4">
            <BorderText_Blue text={"Save as Draft"} />
            <Plusbgblue icon={" "} text={"Save and Submit"} />
          </div>
        </div>
      </div>
      {/* --------------preview-------- */}
      <div className="flex w-4/12 ">
        <div className="new-template-form w-full h-fit">
          <h1>Preview</h1>
          <div className="new-broadcast-form-select-box min-h-16">
            <img src={image ? URL.createObjectURL(image) : ""} alt="" />
            <div
              dangerouslySetInnerHTML={{ __html: bodytext }}
              className="flex flex-col overflow-hidden py-2"
            ></div>
            <div
              dangerouslySetInnerHTML={{ __html: footerText }}
              className="flex flex-col  py-2"
            ></div>
          </div>
          {Button?.type ? (
            <div className="  new-broadcast-form-select-box justify-center  w-full">
              <div className="flex justify-center space-x-2 items-center w-full">
                <WebLInk />
                <p className="text-[#0096DE]  text-base font-normal">
                  {Button?.text}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default NewTemplate;
