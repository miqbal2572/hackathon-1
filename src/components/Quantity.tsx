"use client";
import { useState } from "react";
import React from "react";

const Quantity = () => {
  const [num, setNum] = useState(1);
  return (
    <div className="flex gap-x-3 ">
      <div
        className="border h-6 w-6 rounded-full center"
        onClick={() => setNum(num - 1)}
      >
        -
      </div>
      <span>{num}</span>

      <div
        className="border h-6 w-6 rounded-full center"
        onClick={() => setNum(num + 1)}
      >
        +
      </div>
    </div>
  );
};

export default Quantity;
