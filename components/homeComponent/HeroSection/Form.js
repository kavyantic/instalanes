import { useRouter } from "next/router";
import React, { useState } from "react";
import mobile from "../../../app/utils/brands.json";
import issue from "../../../app/utils/issues.json";
export default function Form() {
  const [modelList, setModelList] = useState([]);
  const router = useRouter()
  return (
    <div className="w-full home_form h-full rounded-xl py-12 px-6 flex items-center">
      <div className="form_group">
        <div className="grid grid-cols-4 gap-6 mb-8">
          <button className="brand-btn col-span-2">Repair</button>
          <button className="brand-btn-secondary col-span-2">
            Protection Plan
          </button>
        </div>
        <form action="#" className="traplace">
          <input
            onChange={({ target: { value } }) => {
              setModelList(
                mobile.find((mb) => mb.brand_name == value)?.models || []
              );
            }}
            placeholder="Enter your brand"
            list="mobile"
            className="text-white white-glass w-full p-4 outline-none focus:outline-none mb-8 rounded-md"
          />
          <datalist id="mobile">
            {mobile.map(({ brand_name },ind) => {
              return <option key={brand_name} value={brand_name} />;
            })}
          </datalist>
          <input
            list="model"
            placeholder="Enter model name"
            className="text-white white-glass w-full p-4 outline-none focus:outline-none mb-8 rounded-md"
          />
          <datalist id="model">
            {modelList.map((model_name,ind) => {
              return <option key={ind} value={model_name} />;
            })}
          </datalist>

          <input
           list="issue"
            placeholder="Please enter your issue"
            className="text-white white-glass w-full p-4 outline-none focus:outline-none mb-8 rounded-md"
          />

          <datalist id="issue">
            {issue.map(({ name },ind) => {
              return <option key={ind} value={name} />;
            })}
          </datalist>
          <button className="brand-btn" onClick={()=>router.push('/book-a-repair/review')}>
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
        </form>
      </div>
    </div>
  );
}
