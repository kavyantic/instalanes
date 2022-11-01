import React from "react";
import Banner from "./Banner";
import Form from "./Form";

export default function HeroSection() {
  console.log("hero section loaded");
  return (
    <section className="hero mt-6">
      <div className="container">
        <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-6">
          <div className="row-span-3 col-span-1">
            <div className="form_section">
              <Form/>
            </div>
          </div>
          <div className="col-span-2 bannersection">
            <h1 className="brand-heading">
              Get repaired Your mobile at your <span>doorstep</span>
            </h1>
          </div>
          <div className="row-span-2 col-span-2">
           <Banner/>
          </div>
        </div>
      </div>
    </section>
  );
}
