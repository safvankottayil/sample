import React from "react";
import "./bookdemo.css";
function BookForm() {
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
          onSubmit={(e) => e.preventDefault()}
          className="pt-9 flex flex-col"
        >
          {/* Company size */}
          <div className="flex flex-grow flex-col">
            <label htmlFor="Company size" className="book-demo-input-label">
              Company size
            </label>
            <select className="book-demo-input-text mt-1 h-14 book-demo-input-border focus:outline-none p-3 ">
              <option value="">Select</option>
            </select>
            <span className="h-3"></span>
            <p className="pl-2 h-4 leading-4"></p>
          </div>
           {/* Country */}
           <div className="flex flex-grow flex-col">
            <label htmlFor="Company size" className="book-demo-input-label">
            Country
            </label>
            <select className="book-demo-input-text mt-1 h-14 book-demo-input-border focus:outline-none p-3 ">
              <option value="">Select</option>
            </select>
            <span className="h-3"></span>
            <p className="pl-2 h-4 leading-4"></p>

          </div>

           {/* Language */}
           <div className="flex flex-grow flex-col">
            <label htmlFor="Company size" className="book-demo-input-label">
            Language
            </label>
            <select className="book-demo-input-text mt-1  h-14 book-demo-input-border focus:outline-none p-3 ">
              <option value="">Select</option>
            </select>
            <span className="h-3"></span>
            <p className="pl-2 h-4 leading-4"></p>
          </div>
          
            {/* What demo are you looking for? */}
            <div className="flex flex-grow flex-col">
            <label htmlFor="demo" className="book-demo-input-label">
            What demo are you looking for?
            </label>
            <select className="book-demo-input-text mt-1  h-14  book-demo-input-border focus:outline-none p-3 ">
              <option value="">Select</option>
            </select>
            <span className="h-3"></span> 
            <p className="pl-2 h-4 leading-4"></p>
          </div>
            {/* Preferred demo time */}
            <div className="flex flex-grow flex-col">
            <label htmlFor="demo" className="book-demo-input-label">
            Preferred demo time
            </label>
            <select className="book-demo-input-text  h-14 book-demo-input-border mt-1 focus:outline-none p-3 ">
              <option value="">Select</option>
            </select>
            <span className="h-3"></span>
            <p className="pl-2 h-4 leading-4"></p>
          </div>
          {/* radio buttons */}
          <div className="flex flex-col">
            <p className="radio-btn-top-text">Do you have WhatsApp API?</p>
            <div className="flex space-x-3">
               <div className="flex space-x-2 justify-center items-center"><input name="W-app-api" type="radio" className="w-5 h-5" /> <span className="book-demo-input-text">Yes</span></div> 
               <div className="flex space-x-2 justify-center items-center"><input name="W-app-api" type="radio" className="w-5 h-5" /> <span className="book-demo-input-text">No</span></div> 
            </div>
          </div>
          {/* submit */}
          <div className="flex w-full pt-5">
            <button  className="submit-btn flex w-full justify-center items-center">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
