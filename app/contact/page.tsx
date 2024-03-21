"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [mobileNoError, setMobileNoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [messageError, setMessageError] = useState('');


  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Validate the form
    if (
      !firstName ||
      !lastName ||
      !mobileNo ||
      !email ||
      !subject ||
      !type ||
      !message
    ) {
      // Show error message for first name if it's empty
      if (!firstName) {
        setFirstNameError("First name is required.");
      } else {
        setFirstNameError("");
      }
      // Show error message for last name if it's empty
      if (!lastName) {
        setLastNameError("Last name is required.");
      } else {
        setLastNameError("");
      }
      // Show error message for mobile number if it's empty
      if (!mobileNo) {
        setMobileNoError("Mobile number is required.");
      } else {
        setMobileNoError("");
      }
      // Show error message for email if it's empty
      if (!email) {
        setEmailError("Email is required.");
      } else {
        setEmailError("");
      }
      // Show error message for subject if it's empty
      if (!subject) {
        setSubjectError("Subject is required.");
      } else {
        setSubjectError("");
      }
      // Show error message for type if it's empty
      if (!type) {
        setTypeError("Type is required.");
      } else {
        setTypeError("");
      }
      if (!message) {
        setMessageError("Message is required.");
      } else {
        setMessageError("");
      }
      return; // Prevent form submission if any required field is empty
    }
    // If all fields are filled, continue with form submission
    console.log("Form submitted!");
  };

  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value);
    if(!event.target.value){
        setFirstNameError("First name is required.");
    } 
    else{
        setFirstNameError("");
    }
  };

  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value);
    if(!event.target.value){
        setLastNameError("Last name is required.");
    } 
    else{
        setLastNameError("");
    }
  };

  const handleMobileNoChange = (event: any) => {
    setMobileNo(event.target.value);
    if(!event.target.value){
        setMobileNoError("Mobile number is required.");
    } 
    else{
        setMobileNoError("");
    }
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
    if(!event.target.value){
        setEmailError("Email is required.");
    } 
    else{
        setEmailError("");
    }
  };

  const handleSubjectChange = (event: any) => {
    setSubject(event.target.value);
    if(!event.target.value){
        setSubjectError("Subject is required.");
    } 
    else{
        setSubjectError("");
    }
  };

  const handleTypeChange = (event: any) => {
    setType(event.target.value);
    if(!event.target.value){
        setTypeError("Type is required.");
    } 
    else{
        setTypeError("");
    }
  };
  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
    if(!event.target.value){
        setMessageError("Message is required.");
    } 
    else{
        setMessageError("");
    }
  };
  const handleFirstNameBlur = () => {
    if (!firstName) {
      setFirstNameError('First name is required.');
    }
  };

  const handleLastNameBlur = () => {
    if (!lastName) {
      setLastNameError('Last name is required.');
    }
  };

  const handleMobileNoBlur = () => {
    if (!mobileNo) {
      setMobileNoError('Mobile number is required.');
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError('Email is required.');
    }
  };

  const handleSubjectBlur = () => {
    if (!subject) {
      setSubjectError('Subject is required.');
    }
  };

  const handleTypeBlur = () => {
    if (!type) {
      setTypeError('Type is required.');
    }
  };

  const handleMessageBlur = () => {
    if (!message) {
      setMessageError('Message is required.');
    }
  };

  return (
    <section className="mb-16 mt-4">
      <div className="mx-auto w-[95%] md:w-[90%] lg:max-w-[85%] 2xl:max-w-[1320px]">
        <div className="">
          <h1 className="text-2xl font-bold text-custom-green">Contact Us</h1>
        </div>
        <div className="mt-4 flex flex-col ">
          <div className="">
            <div className="rounded-xl bg-green-700 p-6">
              <div className="mb-2  text-lg font-semibold text-white">
                Let's start conversation
              </div>
              <div>
                <div className="mb-4 flex">
                  <div className="mr-2 mt-1">
                    <Image
                      src="/about/Group 1.png"
                      alt="about"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div></div>
                  <div className="flex flex-col">
                    <div className="text-sm text-white">Address</div>
                    <div className="text-white">Ramshahapath, Kathmandu,</div>
                    <div className="text-white">Nepal</div>
                  </div>
                </div>
                <div className="mb-4 flex">
                  <div className="mr-2 mt-2">
                    <Image
                      src="/about/Vector.png"
                      alt="about"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div></div>
                  <div className="flex flex-col">
                    <div className="text-sm text-white">Contact</div>
                    <div className="text-white">01-4263387</div>
                    <div className="text-white">Toll Free: 16600111110</div>
                  </div>
                </div>
                <div className="mb-4 flex">
                  <div className="mr-2 mt-1">
                    <Image
                      src="/about/Vector (1).png"
                      alt="about"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm text-white">Email Address</div>
                    <div className="text-white">info@adbl.gov.np</div>
                  </div>
                </div>
                <div className="mb-4 flex">
                  <div className="mr-2 flex justify-start">
                    <Image
                      src="/about/swiftlogo.png"
                      alt="about"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="text-white">Swift Code: ADBLNPKA</div>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-lg p-8 shadow-[0_0px_15px_-2px_rgba(0,0,0,0.3)] ">
              <span className="mx-auto text-justify">
                You can provide your feedback to{" "}
                <Link href="#" className="text-custom-green">
                  NMB Grievance Officer
                </Link>
              </span>
            </div>
            <div className="mt-4 rounded-lg p-8 shadow-[0_0px_15px_-2px_rgba(0,0,0,0.3)] ">
              <span className="mx-auto text-justify">
                You can also provide your feedback to{" "}
                <Link href="#" className="text-custom-green">
                  NRB Grievance Management System
                </Link>
              </span>
            </div>
            <div className="mt-4 rounded-lg p-8 shadow-[0_0px_15px_-2px_rgba(0,0,0,0.3)] ">
              <span className="mx-auto text-justify">
                For Environmental & Social related grievances or feedback{" "}
                <Link href="#" className="text-custom-green">
                  please click here
                </Link>
              </span>
            </div>
          </div>
          <div className="p-8 shadow-[0_0px_10px_-4px_rgba(0,0,0,0.3)]">
            <div>
              <div className="text-lg font-semibold">
                Ask how can we help you
              </div>
              <form
                noValidate
                className="mx-auto max-w-md"
                onSubmit={handleSubmit}
              >
                <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="form-input mt-4 block w-full focus:outline-none"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                  onBlur={handleFirstNameBlur}
                />
                </div>
                {firstNameError && (
                  <span className="text-red-500 text-xs">{firstNameError}</span>
                )}

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="form-input mt-4 block w-full focus:outline-none"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                  onBlur={handleLastNameBlur}
                />
                {lastNameError && (
                  <span className="text-red-500 text-xs">{lastNameError}</span>
                )}

                <input
                  type="tel"
                  id="mobileNo"
                  name="mobileNo"
                  placeholder="Mobile No."
                  className="form-input mt-4 block w-full focus:outline-none"
                  value={mobileNo}
                  onChange={handleMobileNoChange}
                  required
                  onBlur={handleMobileNoBlur}
                  pattern="[0-9]{10}"
                />
                {mobileNoError && (
                  <span className="text-red-500 text-xs">{mobileNoError}</span>
                )}

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="form-input mt-4 block w-full focus:outline-none"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  onBlur={handleEmailBlur}
                />
                {emailError && (
                  <span className="text-red-500 text-xs">{emailError}</span>
                )}

                <select
                  name="subject"
                  className="form-select mt-4 block w-full focus:outline-none"
                  value={subject}
                  onChange={handleSubjectChange}
                  required
                  onBlur={handleSubjectBlur}
                >
                  <option value="">Subject</option>
                  <option value="debit_credit_card_services">
                    Debit / Credit Card Services
                  </option>
                  <option value="mobile_banking_services">
                    Mobile Banking Services
                  </option>
                  <option value="internet_banking_services">
                    Internet Banking Services
                  </option>
                  <option value="employee_behavior_knowledge">
                    Employee Behavior &amp; Knowledge
                  </option>
                  <option value="remittance_activities">
                    Remittance Activities
                  </option>
                  <option value="deposit_services">Deposit Services</option>
                  <option value="loan_services">Loan Services</option>
                  <option value="interest_rates">Interest Rates</option>
                  <option value="renewals">Renewals</option>
                  <option value="fee_charges">Fees &amp; Charges</option>
                  <option value="branch_location_ambience">
                    Branch Location &amp; Ambience
                  </option>
                  <option value="demat_meroshare_services">
                    DEMAT / MeroShare Services
                  </option>
                  <option value="others">Others</option>
                </select>
                {subjectError && (
                  <span className="text-red-500  text-xs">{subjectError}</span>
                )}

                <select
                  name="type"
                  className="form-select mt-4 block w-full focus:outline-none"
                  value={type}
                  onChange={handleTypeChange}
                  required
                  onBlur={handleTypeBlur}
                >
                  <option value="">Type</option>
                  <option value="Complain">Complain</option>
                  <option value="Complement">Complement</option>
                  <option value="Query">Query</option>
                  <option value="Feedback">Feedback</option>
                </select>
                {typeError && <span className="text-red-500  text-xs">{typeError}</span>}

                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="form-textarea mt-4 block w-full focus:outline-none h-24"
                  value={message}
                  onChange={handleMessageChange}
                  required
                  onBlur={handleMessageBlur}
                ></textarea>
                {messageError && (
                  <span className="text-red-500  text-xs">{messageError}</span>
                )}

                <div>
                <input
                  type="submit"
                  value="Submit"
                  className="btn mt-4 cursor-pointer bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
