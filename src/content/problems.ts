import type { FeatureStatus } from "@/content/features";

export type ProblemSolution = {
  problem: string;
  problemDetail: string;
  solution: string;
  solutionDetail: string;
  status: FeatureStatus;
};

export const PROBLEM_SOLUTIONS: ProblemSolution[] = [
  {
    problem: "Grammar mistakes",
    problemDetail: "Typos, missing capitals and wrong tenses slip into quick messages.",
    solution: "Fix Grammar",
    solutionDetail:
      "Spelling, grammar, punctuation and tense are checked on your computer, and every change is shown before you accept it.",
    status: "available",
  },
  {
    problem: "Unprofessional wording",
    problemDetail: "A short, blunt line can read as rude to a colleague, client or recruiter.",
    solution: "Make Polite and Professional",
    solutionDetail:
      "Rule-based rewrites turn “send me the report now” into “Could you please send me the report now?”",
    status: "available",
  },
  {
    problem: "Unclear sentences",
    problemDetail: "Long or awkward sentences make the reader work to understand you.",
    solution: "AI rewriting, if you want it",
    solutionDetail:
      "With your own API key, rewrite in styles such as Improve clarity or Make concise, then review the result.",
    status: "optional",
  },
  {
    problem: "Emails without proper formatting",
    problemDetail: "Missing greetings, cramped paragraphs and no clear closing.",
    solution: "Format Email",
    solutionDetail: "Email formatting is planned and is not part of the extension yet.",
    status: "planned",
  },
];
