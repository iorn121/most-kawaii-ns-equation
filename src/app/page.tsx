"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Candidate, { CandidateProps } from "./components/candidate";

export default function Page() {
  const [voted, setVoted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("voted")) {
      router.push("/result");
    }
  }, []);

  return (
    <main>
      <p className="text-center text-2xl mb-4 font-handlee">
        Vote for the most kawaii N-S equation!
      </p>
      <div className="mb-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <Candidate font="notojp" display_result={false} />
          <Candidate font="mplus" display_result={false} />
          <Candidate font="nanum" display_result={false} />
          <Candidate font="nanumgo" display_result={false} />
          <Candidate font="eb" display_result={false} />
          <Candidate font="notosjp" display_result={false} />
          <Candidate font="mplus1" display_result={false} />
        </div>
      </div>
    </main>
  );
}
