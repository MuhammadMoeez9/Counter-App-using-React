import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container my-5 d-flex flex-column">
        <div className="card  text-center my-5 d-flex justify-content-between">
          <div className="card-container ">
            <h1>
              <q>Counter App</q>
            </h1>
            <div className="my-5">
              <h2 className="my-5">{count}</h2>
              <button
                className="btn btn-success mx-3"
                onClick={() => setCount(count + 1)}
              >
                INCREAMENT
              </button>
              <button
                className="btn btn-danger mx-3 font-bold"
                onClick={() => setCount(count - 1)}
                disabled={count === 0}
              >
                DECREAMENT
              </button>
              <button
                className="btn btn-success mx-3"
                onClick={() => setCount(count + 5)}
              >
                +5
              </button>
              <button
                className="btn btn-secondary mx-3"
                onClick={() => setCount(0)}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
