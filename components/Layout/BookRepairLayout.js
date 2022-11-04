import React from "react";
import Transition from "../transitions";

export default function BookRepairLayout({ children }) {
  return (
    <Transition>
      <div className="book_a_repair_bg">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 w-full">
            <div className="col-span-4">
              <div className="white-glass lg:py-10 px-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="step Complete">1</div>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="step active">2</div>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="step">1</div>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="col-span-8 black-glass px-10 py-20 rounded-xl">
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
