import React from "react";
import "./scrollbar.css";

const items = [
  "Trendyol",
  "Getir",
  "Beko",
  "Vestel",
  "Hepsiburada",
  "Peak Games",
];

function ScrollBar() {
  return (
    <div className="m-5">
      <div className="border border-[#E6E6E6] rounded-3xl max-w-7xl mx-auto mb-8 md:mb-25">
        <div className="max-w-2xl mx-auto mt-6 md:mt-10">
          <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 md:mb-10">
            20.000+ kuruluştan profesyonellerin güvendiği platform
          </h1>
        </div>
        <div className="max-w-6xl mx-auto mb-6 md:mb-10">
          <div className="scroll-wrapper">
            <div className="scroll-track">
              {[...items, ...items].map((item, index) => (
                <div key={index} className="scroll-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollBar;
