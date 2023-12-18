import React, { useState } from "react";
import "./bookdemo.css";
import DropDown from "./DropDown";
import { FormValidation } from "./validation";
function BookForm() {
  const [componySize,setComponySize]=useState('')
  const [country,setCountry]=useState('')
  const [language,setLanguage]=useState('')
  const [demo,setDemo]=useState('')
  const [demotime,setDemoTime]=useState('')
  const [api,setApi]=useState('')
  const [err,setErr]=useState({})
  async function handleSubmit(e){
    e.preventDefault()
    const check=FormValidation({companysize:componySize,country,api,demo,demotime,language})
    console.log(check);
    setErr(check.err)
  }
  return (
    <div className="w-1/2 flex justify-start  pt-10 font-inter">
      <div className="book-demo-form-border flex flex-col mb-14 w-[604px] p-7">
        <div className="flex flex-col">
          <h1 className="form-title">Book your demo</h1>
          <p className="form-secont-text pt-1">
            We would appreciate it if you could complete these questions so we
            can adjust our demo to your specifications.
          </p>
        </div>
        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="pt-9 flex flex-col"
        >
          {/* Company size */}
          <div className="flex flex-grow flex-col">
            <label htmlFor="Company size" className="book-demo-input-label">
              Company size
            </label>
           <DropDown err={err?.companysize==false?true:false} data={['Select']} />
            {/* <span className="h-3"></span> */}
            <p className="pl-1 h-4 text-red-500 mb-2 pt-1 leading-4">{err?.companysize==false?'This field is required':''}</p>
          </div>
           {/* Country */}
           <div className="flex flex-grow flex-col">
            <label htmlFor="Contry" className="book-demo-input-label">
            Country
            </label>
            <DropDown err={err?.country==false?true:false} data={['Select']} />
            
            <p className="pl-1 h-4 text-red-500 mb-2 pt-1 leading-4">{err?.country==''?'This field is required':''}</p>

          </div>

           {/* Language */}
           <div className="flex flex-grow flex-col">
            <label htmlFor="Company size" className="book-demo-input-label">
            Language
            </label>
            <DropDown err={err?.language==false?true:false} data={['Select']} />
            <p className="pl-1 h-4 text-red-500 mb-2 pt-1 leading-4">{err?.language==''?'This field is required':''}</p>
          </div>
          
            {/* What demo are you looking for? */}
            <div className="flex flex-grow flex-col">
            <label htmlFor="demo" className="book-demo-input-label">
            What demo are you looking for?
            </label>
            <DropDown err={err?.demo==false?true:false} data={['Select']} />
            <p className="pl-1 h-4 text-red-500 mb-2 pt-1 leading-4">{err?.demo==''?'This field is required':''}</p>
          </div>
            {/* Preferred demo time */}
            <div className="flex flex-grow flex-col">
            <label htmlFor="demo" className="book-demo-input-label">
            Preferred demo time
            </label>
            <DropDown err={err?.demotime==false?true:false} data={['Select']} />
            <p className="pl-1 h-4 text-red-500 mb-2 pt-1 leading-4">{err?.demotime==''?'This field is required':''}</p>
          </div>
          {/* radio buttons */}
          <div className="flex flex-col">
            <p className="radio-btn-top-text">Do you have WhatsApp API?</p>
            <div className="flex space-x-3">
               <div className="flex space-x-2 justify-center items-center"><input onClick={()=>setApi('yes')} name="W-app-api" type="radio" className="w-5 h-5" /> <span className="book-demo-input-text">Yes</span></div> 
               <div className="flex space-x-2 justify-center items-center"><input onClick={()=>setApi('No')} name="W-app-api" type="radio" className="w-5 h-5" /> <span className="book-demo-input-text">No</span></div> 
            </div>
            <p className="pl-1 h-4 text-red-500 mb-2 pt-1 leading-4">{err?.api==''?'This field is required':''}</p>
          </div>
          {/* submit */}
          <div className="flex w-full pt-5">
            <button onClick={handleSubmit}  className="submit-btn flex w-full justify-center items-center">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
