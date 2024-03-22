"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

enum SubjectEnum {
  subject = "",
  debit_credit_card_services = "debit_credit_card_services",
  mobile_banking_services = "mobile_banking_services",
  internet_banking_services = "internet_banking_services",
  employee_behavior_knowledge = "employee_behavior_knowledge",
  remittance_activities = "remittance_activities",
  deposit_services = "deposit_services",
  loan_services = "loan_services",
  interest_rates = "interest_rates",
  renewals = "renewals",
  fee_charges = "fee_charges",
  branch_location_ambience = "branch_location_ambience",
  demat_meroshare_services = "demat_meroshare_services",
  others = "others",
}

enum TypeEnum {
  Type = "",
  Complain = "Complain",
  Complement = "Complement",
  Query = "Query",
  Feedback = "Feedback",
}

interface IFormInput {
  firstName: string;
  lastName: string;
  mobileNo: string;
  email: string;
  subject: SubjectEnum;
  Type: TypeEnum;
  message: string;
}

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <section className="mb-16 mt-4">
      <div className="mx-auto w-[95%] md:w-[90%] lg:max-w-[85%] 2xl:max-w-[1320px]">
        <div className="">
          <h1 className="text-2xl font-bold text-custom-green">Contact Us</h1>
        </div>
        <div className="mt-4 flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:basis-2/6">
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
                    <div className="text-white">Ramshahapath, Kathmandu</div>
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
          <div className="mt-8 rounded-lg p-8 shadow-[0_0px_10px_-4px_rgba(0,0,0,0.3)] lg:ml-4 lg:mt-0 lg:basis-4/6">
            <div>
              <div className="mb-4 text-lg font-semibold">
                Ask how can we help you
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className=" ">
                    <div className="rounded-md border-2 border-custom-green p-[9px]">
                      <input
                        {...register("firstName", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                        className="form-input ml-[7px] block w-full focus:outline-none"
                        placeholder="First Name"
                      />
                    </div>
                    {errors.firstName?.type === "required" && (
                      <p role="alert" className="mt-2 text-xs text-red-600">
                        First name is required
                      </p>
                    )}
                  </div>
                  <div className=" ">
                    <div className="rounded-md border-2 border-custom-green p-[9px]">
                      <input
                        {...register("lastName", { required: true })}
                        aria-invalid={errors.lastName ? "true" : "false"}
                        className="form-input ml-[7px] block w-full focus:outline-none"
                        placeholder="Last Name"
                      />
                    </div>
                    {errors.lastName?.type === "required" && (
                      <p role="alert" className="mt-2 text-xs text-red-600">
                        Last name is required
                      </p>
                    )}
                  </div>
                  <div className=" ">
                    <div className="rounded-md border-2 border-custom-green p-[9px]">
                      <input
                        {...register("mobileNo", { required: true })}
                        aria-invalid={errors.mobileNo ? "true" : "false"}
                        className="form-input ml-[7px] block w-full focus:outline-none"
                        placeholder="Mobile No."
                      />
                    </div>
                    {errors.mobileNo?.type === "required" && (
                      <p role="alert" className="mt-2 text-xs text-red-600">
                        Mobile number is required
                      </p>
                    )}
                  </div>
                  <div className="mb-1 lg:mb-0">
                    <div className="rounded-md border-2 border-custom-green p-[9px]">
                      <input
                        {...register("email")}
                        aria-invalid={errors.email ? "true" : "false"}
                        className="form-input ml-[7px] block w-full focus:outline-none"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="rounded-md border-2 border-custom-green">
                      <select
                        {...register("subject", { required: true })}
                        aria-invalid={errors.subject ? "true" : "false"}
                        className="w-full rounded-md p-3"
                      >
                        <option value="">Select Subject</option>
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
                        <option value="deposit_services">
                          Deposit Services
                        </option>
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
                    </div>
                    {errors.subject?.type === "required" && (
                      <p
                        role="alert"
                        className="my-1 mt-2 text-xs text-red-600"
                      >
                        Subject is required
                      </p>
                    )}
                  </div>
                  <div className="md:mt-0">
                    <div className="rounded-md border-2 border-custom-green">
                      <select
                        {...register("Type", { required: true })}
                        aria-invalid={errors.Type ? "true" : "false"}
                        className="w-full rounded-md p-3"
                      >
                        <option value="">Type</option>
                        <option value="Complain">Complain</option>
                        <option value="Complement">Complement</option>
                        <option value="Query">Query</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>
                    {errors.Type?.type === "required" && (
                      <p role="alert" className="mt-2 text-xs text-red-600">
                        Type is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-3 mt-4 lg:mb-0">
                  <div className="rounded-md border-2 border-custom-green p-[9px]">
                    <textarea
                      {...register("message")}
                      aria-invalid={errors.message ? "true" : "false"}
                      className="form-input ml-[7px] block h-36 w-full focus:outline-none"
                      placeholder="Message"
                    />
                  </div>
                  {errors.mobileNo?.type === "required" && (
                    <p role="alert" className="mt-2 text-xs text-red-600">
                      Message is required
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="font=bold mt-4 rounded-md bg-custom-green px-5 py-3 text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className=" mb-4">
            <h2 className="text-xl font-bold text-custom-green">
              Location Map
            </h2>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14131.186860872627!2d85.3264646!3d27.6926772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0e32f829ca1d928!2z4KSP4KSo4KSP4KSu4KSs4KS_IOCkrOCliOCkguCklSDgpLLgpL_gpK7gpL_gpJ_gpYfgpKE!5e0!3m2!1sne!2snp!4v1669100749462!5m2!1sne!2snp"
              className="w-full"
              height="450"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
