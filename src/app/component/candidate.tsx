"use client";
import { useState } from "react";

export default function Candidate() {
  const [votes, setVotes] = useState([]);
  const vote = async (item: string) => {
    const response = await fetch(`/api/vote?item=${item}`, { method: "GET" });
    const data = await response.json();
    setVotes(data);
  };

  return (
    <div className="container mx-auto">
      <div className="w-80 h-24 bg-white rounded-3xl shadow justify-center items-center flex flex-col">
        <div className="w-72 h-10 text-center text-black text-base font-normal">
          ∂v/∂t+(v・∇)v=-(1/ρ)∇p+μ(∇^2)v+F
        </div>
        <button
          className="w-20 h-7 text-center text-white bg-emerald-400 font-normal rounded-3xl"
          onClick={() => vote("test")}
        >
          Vote
        </button>
      </div>
    </div>
  );
}
