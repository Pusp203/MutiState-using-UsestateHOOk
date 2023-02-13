import React, { useState } from "react";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import Stepper from "./components/Stepper";
import Complete from "./components/Complete";

function Example() {
  const displayPage = ["FirstStep", "SecondStep", "ThirdStep", "Complete"];
  const [count, setcount] = useState(0);
  const pageDisplay = () => {
    if (count === 0) {
      return <FirstStep />;
    } else if (count === 1) {
      return <SecondStep />;
    } else if (count === 2) {
      return <ThirdStep />;
    } else if (count === 3) {
      return <Complete />;
    }
    return null;
  };

  return (
    <>
      <div>
        <Stepper count={count} />
        <h1>{displayPage[count]}</h1>
        <div>
          {pageDisplay()}
          {count !== 4 ? (
            <button
              onClick={() => {
                setcount((cur) => cur + 1);
              }}
            >
              {count !== 3 ? "NExt" : "Finish"}
            </button>
          ) : (
            ""
          )}

          {count !== 0 && count !== 3 && count !== 4 ? (
            <button
              onClick={() => {
                setcount((cur) => cur - 1);
              }}
            >
              Back
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* <FirstStep />
      <SecondStep />
      <ThirdStep /> */}
    </>
  );
}

export default Example;
