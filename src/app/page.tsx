"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import Candidate from "./component/candidate";

export default function Page() {
  const [votes, setVotes] = useState([]);
  const vote = async (item: string) => {
    const response = await fetch(`/api/vote?item=test`, { method: "GET" });
    redirect(`/result/`);
  };

  return (
    <main>
      <header className="bg-emerald-400 text-center text-white py-4 text-3xl mb-2">
        Most Kawaii N-S Equation
      </header>
      <Candidate />
      <Candidate />
      <Candidate />
      <Candidate />
    </main>
  );
}
