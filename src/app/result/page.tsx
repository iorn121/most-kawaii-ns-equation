"use client";
import { useState } from "react";

export default function Page() {
  return (
    <main>
      <button onClick={() => vote("test")}>Vote</button>
      <p>Votes: {votes}</p>
    </main>
  );
}
