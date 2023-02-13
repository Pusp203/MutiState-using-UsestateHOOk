import React from "react";

function Stepper({ count }) {
  const displayPage = ["FirstStep", "SecondStep", "ThirdStep", "Complete"];
  return (
    <div>
      {count !== 4
        ? displayPage.map((step, index) => (
            <span key={index}>
              {step}
              {index < count ? " +" : ""}
            </span>
          ))
        : ""}
    </div>
  );
}

export default Stepper;
