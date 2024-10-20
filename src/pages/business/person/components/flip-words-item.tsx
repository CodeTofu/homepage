import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function FlipWordsItem() {
  const name = ["Tofu", "豆腐"];
  const profession = ["A front end engineer", "一名前端工程师"];
  return (
    <div>
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={name} />
      </div>
      <div className="text-neutral-400 text-xl max-w-sm mt-2  dark:text-neutral-400">
        <FlipWords words={profession} /> 
      </div>
    </div>
  );
}
