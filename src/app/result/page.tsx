"use client";
import React, { useState, useEffect } from "react";
import Candidate, { CandidateProps } from "../components/candidate";
import { useRouter } from "next/navigation";

type Vote = {
  id: number;
  item: string;
  count: number;
};

export default function Page() {
  const [votes, setVotes] = useState<Vote[]>([]);
  const router = useRouter();

  const get_votes = async () => {
    const response = await fetch(`/api/get_votes`, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      setVotes(data.result);
    }
  };

  const back_to_vote = () => {
    localStorage.removeItem("voted");
    router.push("/");
  };

  useEffect(() => {
    get_votes();
  }, []);

  return (
    <main>
      <p className="text-center text-2xl mb-4 font-handlee">
        Result for the most kawaii N-S equation!
      </p>
      {/* <button
        className="w-20 h-8 text-center text-white text-center bg-emerald-400 rounded-3xl font-handlee my-4"
        onClick={() => back_to_vote()}
      >
        Refresh
      </button> */}
      <div className="mb-10">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 mx-4">
          {votes.map((vote, i) => (
            <Candidate
              font={vote.item}
              rank={i + 1}
              vote_count={vote.count}
              display_result={true}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
