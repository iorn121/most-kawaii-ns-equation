"use client";
import { useRouter } from "next/navigation";

export interface CandidateProps {
  font: string;
  vote_count?: number;
  rank?: number;
  display_result: boolean;
}

export default function Candidate({
  font,
  vote_count,
  rank,
  display_result,
}: CandidateProps) {
  const router = useRouter();
  const vote = async (font: string) => {
    const response = await fetch(`/api/vote?item=${font}`, {
      method: "GET",
    });
    if (response.ok) {
      localStorage.setItem("voted", "true");
      router.push("/result");
    }
  };

  return (
    <div className={`mx-auto`}>
      <div className="w-96 h-auto bg-white rounded-3xl shadow justify-center items-center flex flex-col p-4">
        <h3 className="w-auto h-auto text-black text-2xl font-normal mb-4 text-emerald-400">
          {font}
        </h3>
        <span
          className={`w-auto h-auto text-black text-base font-${font} mb-4`}
        >
          ∂v/∂t+(v・∇)v=-(1/ρ)∇p+μ(∇^2)v+F
        </span>
        <span className="w-auto h-auto text-black text-base font-normal mb-4">
          {display_result ? `${rank}` : "?"}位{" "}
          {display_result ? `${vote_count}` : "?"}票
        </span>
        <button
          className="w-20 h-8 text-center text-white bg-emerald-400 rounded-3xl font-handlee"
          onClick={() => vote(font)}
        >
          Vote
        </button>
      </div>
    </div>
  );
}
