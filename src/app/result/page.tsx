"use client";
import React, { useState, useEffect } from "react";
import Candidate from "../components/candidate";
import { FontKey } from "../fonts";
import { ResultButton } from "../share/resultButton";

type Vote = {
  id: number;
  item: FontKey;
  count: number;
};

export default function Page() {
  const [votes, setVotes] = useState<Vote[]>([]);

  const get_votes = async () => {
    const response = await fetch(`/api/get_votes`, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      setVotes(data.result);
    }
  };

  useEffect(() => {
    get_votes();
  }, []);

  return (
    <main>
      <p className="text-center text-2xl mb-4 font-handlee">
        Result for the most kawaii N-S equation!
      </p>

      <ResultButton />

      <div className="mb-10">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 mx-4">
          {votes.map((vote, i) => (
            <Candidate
              key={vote.id}
              font={vote.item}
              rank={i + 1}
              vote_count={vote.count}
              is_result={true}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
