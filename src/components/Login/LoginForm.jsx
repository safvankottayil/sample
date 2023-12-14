import React, { useRef, useState } from "react";
import "./login.css";
import Google from "../Svgs/Google";
import Facebook from "../Svgs/Facebook";
import codes from "country-calling-code";
import { Link, useNavigate } from "react-router-dom";
import { Validation } from "./Formvalidate";
import ClosedEye from "../Svgs/ClosedEye";
import Eye from "../Svgs/Eye";
function LoginForm() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [eye,setEye]=useState(false)
  const [countryCode, setCountryCode] = useState(codes[0].countryCodes[0]);
  const [countryShow, setContryShow] = useState(false);
  const [error, setError] = useState({
    FirstName: {},
    LastName: {},
    Phone: {},
    Email: {},
    Password: {},
  });
  const FirstNameRef = useRef(null),
    LastNameRef = useRef(null),
    PhoneRef = useRef(null),
    EmailRef = useRef(null),
    PasswordRef = useRef(null);
  async function handleSubmit(e) {
    e.preventDefault();
    let fname = FirstNameRef.current.value.trim();
    let lname = LastNameRef.current.value.trim();
    let email = EmailRef.current.value.trim();
    let password = PasswordRef.current.value.trim();
    let phone = PhoneRef.current.value.trim();
    const check = Validation(
      {
        FirstName: fname,
        LastName: lname,
        Email: email,
        Password: password,
        Phone: phone,
      },
      { EL: true, FN: true, LN: true, PD: true, PN: true }
    );
    if (check.status) {
      navigate("/getstarted");
    } else {
      setError({ ...error, ...check.err });
    }
  }
  function IsNumber(){
    let num=PhoneRef.current.value
    let result=num.replace(/\D/g, '');
    setPhone(result)
    let check = Validation(
      { Phone:result},
      { PN: true }
    );
    setError({ ...error, ...check.err });
  }

  return (
    <div className="w-1/2 py-16 flex font-inter pl-20">
      <div className="login-form h-fit p-7 flex flex-col min-w-[604px]">
        {/* title */}
        <div className="flex flex-col">
          <p style={{ fontWeight: 600 }} className="text-2xl">
            Start your free trail
          </p>
          <p style={{ fontWeight: 400 }} className="text-lg list-color">
            Get started with a demo account on Osapp
          </p>
        </div>
        {/* GOOGLE LOGIN AND FACEBOOK LOGIN */}
        <div className="flex gap-6  pt-6">
          <div
            style={{ color: "#7C838A" }}
            className="input-border text-base flex flex-grow py-[6px] px-[10px] items-center space-x-2  "
          >
            <Google />{" "}
            <span style={{ fontWeight: 500 }} className="pl-2">
              {" "}
              Sign up with Google
            </span>
          </div>
          <div
            style={{ color: "#7C838A" }}
            className="input-border text-base flex flex-grow py-1  items-center space-x-2 px-[10px] "
          >
            {" "}
            <Facebook />{" "}
            <span style={{ fontWeight: 500 }} className="pl-2">
              Sign up with Facebook
            </span>{" "}
          </div>
        </div>
        <div className="flex items-center pt-4">
          <span className="text-base list-color">or sign up with email</span>
          <span className="flex flex-grow h-[1.5px] ml-4 line-color "></span>
        </div>

        {/* form */}
        <form onClick={handleSubmit} className="flex flex-col pt-5">
          {/*  */}
          <div className="flex gap-6 font-inter    ">
            {/* Fist name */}
            <div className="flex flex-grow flex-col">
              <label htmlFor="Firstname" className="input-label">
                First Name
              </label>
              <input
                onChange={() => {
                  let check = Validation(
                    { FirstName: FirstNameRef.current.value.trim() },
                    { FN: true }
                  );
                  setError({ ...error, ...check.err });
                }}
                ref={FirstNameRef}
                placeholder="First Name"
                type="text"
                className={`input-text ${
                  error.FirstName?.status == true
                    ? "input-border-success"
                    : error.FirstName?.status == false
                    ? "input-border-red"
                    : "input-border"
                }  focus:outline-none py-4 px-6 `}
              />
              <p className=" input-err h-4 leading-4">
                {error.FirstName?.status == false ? error.FirstName.msg : ""}
              </p>
            </div>
            {/* Last name */}
            <div className="flex flex-col flex-grow">
              <label htmlFor="Last Name" className="input-label">
                Last Name
              </label>
              <input
                onChange={() => {
                  let check = Validation(
                    { LastName: LastNameRef.current.value.trim() },
                    { LN: true }
                  );
                  console.log(check);
                  setError({ ...error, ...check.err });
                }}
                ref={LastNameRef}
                placeholder="Last Name"
                type="text"
                className={`input-text ${
                  error.LastName?.status == true
                    ? "input-border-success"
                    : error.LastName?.status == false
                    ? "input-border-red"
                    : "input-border"
                }  focus:outline-none py-4 px-6 `}
              />
              <p className=" input-err h-4 leading-4">
                {error.LastName?.status == false ? error.LastName.msg : ""}
              </p>
            </div>
          </div>
          {/* Business Email Address */}
          <div className="flex">
            <div className="flex flex-grow flex-col pt-2">
              <label htmlFor="Business Email Address" className="input-label">
                Business Email Address
              </label>
              <input
                onChange={() => {
                  let check = Validation(
                    { Email: EmailRef.current.value.trim() },
                    { EL: true }
                  );
                  setError({ ...error, ...check.err });
                }}
                ref={EmailRef}
                placeholder="compeny@gmail.com"
                type="email"
                className={`input-text ${
                  error.Email?.status == true
                    ? "input-border-success"
                    : error.Email?.status == false
                    ? "input-border-red"
                    : "input-border"
                }  focus:outline-none py-4 px-6`}
              />
              <p className=" input-err h-4 leading-4">
                {error.Email?.status == false ? error.Email.msg : ""}
              </p>
            </div>
          </div>
          {/* Password */}
          <div className="flex">
            <div className="flex flex-grow relative flex-col pt-2">
              <label htmlFor="Password" className="input-label">
                Password
              </label>
              <input
                onChange={() => {
                  let check = Validation(
                    { Password: PasswordRef.current.value.trim() },
                    { PD: true }
                  );
                  setError({ ...error, ...check.err });
                }}
                ref={PasswordRef}
                placeholder="Password"
                type={eye?'text':'Password'}
                className={`input-text ${
                  error.Password?.status == true
                    ? "input-border-success"
                    : error.Password?.status == false
                    ? "input-border-red"
                    : "input-border"
                }  focus:outline-none py-4 px-6 `}
              />
              <div onClick={()=>setEye(!eye)} className="absolute right-6 top-11">{eye==true?<Eye/>:<ClosedEye/>}</div>
              <p className=" input-err h-4 leading-4">
                {error.Password?.status == false ? error.Password.msg : ""}
              </p>
            </div>
          </div>

          {/* Your Mobile Number */}
          <div className="flex">
            <div className="flex flex-grow flex-col pt-2">
              <label htmlFor="Your Mobile Number" className="input-label">
                Your Mobile Number
              </label>
              <div className="flex flex-grow">
                <div className="w-20 flex items-center pr-1 relative justify-between py-2 pl-2">
                  <div
                    className={` w-fit rounded-lg p-2 ring-1 country-modal ring-slate-400 ring-opacity-40 ${
                      countryShow ? "" : "hidden"
                    } h-80 absolute bg-slate-100 bottom-[50px] left-0 overflow-y-auto`}
                  >
                    {codes.map((item) => {
                      return (
                        <>
                          <p
                            onClick={() => {
                              setCountryCode(item.countryCodes[0]),
                                setContryShow(false);
                            }}
                            className="whitespace-nowrap text-sm rounded-lg hover:bg-blue-500 hover:text-white"
                          >
                            {" "}
                            <span className="pl-2">{item.country}</span>{" "}
                            <span className="pl-2">
                              (+{item.countryCodes[0]})
                            </span>{" "}
                          </p>
                        </>
                      );
                    })}
                  </div>
                  +{countryCode}
                  <svg
                    onClick={() => setContryShow(!countryShow)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M2.54272 5.77124L8.00008 11.2286L13.4574 5.77124"
                      stroke="#9E9E9E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-grow flex-col">
                  <input
                    onChange={IsNumber}
                    ref={PhoneRef}
                    value={phone}
                    placeholder="000 0000 000"
                    type="text"
                    className={`input-text ${
                      error.Phone?.status == true
                        ? "input-border-success"
                        : error.Phone?.status == false
                        ? "input-border-red"
                        : "input-border"
                    }  focus:outline-none py-4 px-6 flex flex-grow `}
                  />
                  <p className=" input-err h-4 leading-4">
                    {error.Phone?.status == false ? error.Phone.msg : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <p>
              <span className="term-poli-black">
                By signing up you agree to the{" "}
              </span>
              <span className="term-poli-blue"> Terms </span>
              <span className="term-poli-black"> and </span>
              <span className="term-poli-blue"> Privacy Policy</span>
            </p>
          </div>
          <div className="flex flex-grow pt-2 ">
            <button
              style={{ fontWeight: 600 }}
              className="trial-btn-bg py-2 flex flex-grow justify-center items-center text-white text-base"
            >
              Start my trial
            </button>
          </div>
          <div className="flex justify-start items-center pt-3">
            <p>Already have an account?</p>{" "}
            <Link className="pl-3 text-blue">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
