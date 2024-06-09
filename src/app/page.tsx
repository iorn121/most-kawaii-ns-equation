"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Candidate from "./components/candidate";
import { fonts, FontKey } from "./fonts";
import { VoteButton } from "./share/voteButton";

export default function Page() {
  const router = useRouter();
  const [shuffledFonts, setShuffledFonts] = useState<string[]>([]);

  useEffect(() => {
    if (localStorage.getItem("voted")) {
      router.push("/result");
    }
    const fontsCopy = [...fonts];
    for (let i = fontsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fontsCopy[i], fontsCopy[j]] = [fontsCopy[j], fontsCopy[i]];
    }
    setShuffledFonts(fontsCopy);
  }, []);

  return (
    <main>
      <div className="hidden font-eb font-handlee font-mplus font-mplus1 font-nanum font-nanumgo font-notojp font-notosjp">
        test
      </div>
      <p className="text-center text-2xl mb-4 font-handlee">
        Vote for the most kawaii N-S equation!
      </p>
      <VoteButton />
      <div className="mb-10 mr-2 ml-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {shuffledFonts.map((f) => (
            <Candidate font={f as FontKey} is_result={false} />
          ))}
      </div>
    </main>
  );
}
