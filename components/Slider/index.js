import React from "react";
import MultiSlider from "./MultiSlider";

export default function Slider() {
  return (
    <div className="flex flex-col p-3">
      {/* <div className="flex flex-row">
        <div className="title">
          <h2 className="carousel-title">
            TITLE HERE<span>SPAN</span>
          </h2>
        </div>
        <div className="grow" />

        <div className="buttons space-x-1.5">
          <button>
            <img src="/arrow-left.svg" height={'1em'} />
          </button>
          <button>
            <img src="/arrow-right.svg" />
          </button>
        </div>
      </div> */}
      <div>
        <MultiSlider/>
      </div>
    </div>
  );
}
