import React, { useState } from "react";
import styled from "styled-components";
const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
`;
const Box_shadow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2.5rem;
  margin-top: 2.5rem;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const States = () => {
  const [count, setCount] = useState(0);
  const [inputvalue, setInputvalue] = useState(1);

  //Increment
  const handleIncrement = () => {
    setCount(count + inputvalue);
  };
  //Decrement
  const handleDecrement = () => {
    setCount(count - inputvalue);
  };

  const onInputchange = (value) => {
    setInputvalue((value));
  };

  const handleReset=()=>{
    setInputvalue(1);
    setCount(0)
  }

  return (
    <Box>
      <Box_shadow>
        <h1 className="text-4xl text-center pt-2"> useState Challenge</h1>
        <span className="flex">{count}</span>
        <span className="flex gap-3">
          step
          <input
            type="number"
            className="w-20  text-center bg-blue-300 rounded-sm text-white "
            value={inputvalue}
            onChange={(e) => onInputchange(Number(e.target.value))}
          />
        </span>
        <span className="flex gap-4 mt-6">
          <button
            className={count>=100?"bg-sky-300 text-white rounded-full pl-3 pr-3 ":"bg-green-500 text-white rounded-full pl-3 pr-3"}
            onClick={handleIncrement}
            disabled={count>=100}
          >
            Increment
          </button>
          <button
            className={count===0?"bg-sky-300 text-white rounded-full pl-3 pr-3 ":"bg-red-600 text-white rounded-full pl-3 pr-3" }
            onClick={handleDecrement}
            disabled={count===0}
          >
            Decrement
          </button>
          <button
            className="bg-blue-600 text-white rounded-full pl-3 pr-3"
            onClick={handleReset}
          >
            Reset
          </button>
        </span>
      </Box_shadow>
    </Box>
  );
};

export default States;
