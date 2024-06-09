"use client";
import { useRouter } from "next/navigation";
import { fontNames, FontKey } from "../fonts";

export type CandidateProps = {
  font: FontKey;
  vote_count?: number;
  rank?: number;
  is_result: boolean;
};

export default function Candidate({
  font,
  vote_count,
  rank,
  is_result,
}: CandidateProps) {
  const router = useRouter();
  const fontName = "font-" + font;
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
    <div>
      <div className="w-full h-auto bg-white rounded-3xl shadow justify-center items-center flex flex-col p-4">
        {is_result ? (
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mb-2 ${
              rank === 1
                ? "bg-yellow-300"
                : rank === 2
                ? "bg-gray-300"
                : rank === 3
                ? "bg-yellow-600"
                : "bg-gray-600"
            }`}
          >
            {rank}
          </div>
        ) : null}
        <h3 className="text-black text-2xl font-normal mb-4 text-emerald-400">
          {fontNames[font]}
        </h3>
        <span className={`text-black md:text-lg text-xl ${fontName} mb-4`}>
          ∂v/∂t+(v・∇)v=-(1/ρ)∇p+μ(∇^2)v+F
        </span>
        {is_result ? (
          <span className="text-black text-base font-normal">
            {is_result ? `${rank}` : "?"}位 {is_result ? `${vote_count}` : "?"}
            票
          </span>
        ) : (
          <button
            className="w-20 h-8 text-center text-white bg-emerald-400 rounded-3xl font-handlee"
            onClick={() => vote(font)}
          >
            Vote
          </button>
        )}
      </div>
    </div>
  );
}
