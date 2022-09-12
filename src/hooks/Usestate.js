import React, { useState } from "react";

const Usestate = () => {
  const [number, setNumber] = useState(0);

  const incrementHandle = () => {
    setNumber(number + 1);
  };
  const decrementHandle = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12 d-flex justify-content-evenly align-items-center p-3"
            style={{ backgroundColor: "#000000" }}
          >
            <div className="row w-100">
              <div className="col-6 d-flex justify-content-end align-items-center">
                <span style={{ color: "#fff", fontWeight: "lighter" }}>
                  Number - {number}
                </span>
              </div>
              <div className="col-6  d-flex justify-content-end align-items-center">
                <button
                  className="btn btn-primary me-2"
                  onClick={incrementHandle}
                >
                  {" "}
                  Increment{" "}
                </button>
                <button
                  className="btn btn-secondary ms-2"
                  onClick={decrementHandle}
                >
                  {" "}
                  Decrement{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Usestate;
