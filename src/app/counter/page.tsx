"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increase=()=>{ 
    setCount(count + 1);
  }
  const discrease =()=>{ 
    setCount(count - 1);
  } 
  const rest =()=>{
    setCount(0)
  }

  return (
    <div className="text-center  bg-slate-200 container mx-auto rounded-4xl py-4 my-3 ">
      <h2 className="text-bold text-4xl ">{count}</h2>
      <div className="my-2  flex gap-3 items-center justify-center">
        <button 
        onClick={increase}
         className="btn btn-success">Increase(+1)</button>
        <button 
        onClick={discrease}
         className="btn btn-accent">Dscrease(-1)</button>
        <button 
        onClick={rest}
         className="btn btn-circle">Reset</button>
      </div>
    </div>
  );
};

export default Counter;
