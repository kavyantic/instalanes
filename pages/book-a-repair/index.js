import { useRouter } from "next/router";
import React, { useState } from "react";
import BookRepairLayout from "../../components/Layout/BookRepairLayout";
import mobile from "../../app/utils/brands.json";
import issue from "../../app/utils/issues.json";
import Creatable from 'react-select/creatable';
import Select from 'react-select';
import { useGetRepairDataQuery } from "../../app/store/apiSlice";
export default function BookARepair({ options }) {
  const { colors, currentDate, issues, mobiles, timeSlots } = options;
  const router = useRouter();
  const [brandModel, setBrandModel] = useState([])
  console.log(brandModel);
  // const { data: options, error, isLoading } = useGetRepairDataQuery()

  return (
    <>
      <h2 className="font-light text-4xl text-darkLight mb-8">Book a repair</h2>
      <div className="form_group">

        <div className="grid grid-cols-12 gap-4 mb-8 traplace">
          <div className="col-span-6 multiseletform">
            <Creatable
              options={mobiles.map(({ name }) => ({ value: name, label: name }))}
              onChange={({ value }) => { (setBrandModel(mobiles.find((m) => m.name == value)?.models?.map((name) => ({ value: name, label: name })))) }}
              placeholder="Select Brand hello"
              className="book-form-container"
              classNamePrefix="book-form"
            />
          </div>
          <div className="col-span-6 multiseletform">
            <Creatable
              options={brandModel}
              placeholder="Select Model"
              className="book-form-container"
              classNamePrefix="book-form"
            />
          </div>
          <div className="col-span-12 multiseletform">
            <Select
              options={colors.map(({ name }) => ({ value: name, label: name }))}
              placeholder="Select Color"
              className="book-form-container"
              classNamePrefix="book-form"
            />
          </div>
          <div className="col-span-12 multiseletform">
            <Creatable
              options={issues.map(({ name }) => ({ value: name, label: name }))}
              isMulti
              placeholder="Issue with Device"
              className="book-form-container"
              classNamePrefix="book-form"
            />
          </div>
          <div className="col-span-6 multiseletform">
            <input type="date" name="" className="w-full black-glass-repair" id="" />
          </div>
          <div className="col-span-6 multiseletform">
            <Select
              options={timeSlots.map(({ slot: name }) => ({ value: name, label: name }))}
              placeholder="Select Time"
              className="book-form-container"
              classNamePrefix="book-form"
            />
          </div>
        </div>
        <button
          className="brand-btn"
          onClick={() => {
            router.push("/book-a-repair/address");
          }}
        >
          Continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

BookARepair.getLayout = function (page) {
  return <BookRepairLayout>{page}</BookRepairLayout>;
};


export async function getStaticProps() {
  const res = await fetch('https://api.devicecure.in/data/repair')
  const options = await res.json()
  return {
    props: {
      options,
    },
  }
}
