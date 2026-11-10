export type DiffToken = {
  text: string;
  isChanged: boolean;
};

export type WordDiff = {
  before: DiffToken[];
  after: DiffToken[];
};

function tokenize(text: string): string[] {
  return text.split(/\s+/).filter(Boolean);
}

function buildCommonLengthTable(beforeWords: string[], afterWords: string[]): number[][] {
  const table = Array.from({ length: beforeWords.length + 1 }, () =>
    Array<number>(afterWords.length + 1).fill(0),
  );

  for (let beforeIndex = beforeWords.length - 1; beforeIndex >= 0; beforeIndex--) {
    for (let afterIndex = afterWords.length - 1; afterIndex >= 0; afterIndex--) {
      table[beforeIndex][afterIndex] =
        beforeWords[beforeIndex] === afterWords[afterIndex]
          ? table[beforeIndex + 1][afterIndex + 1] + 1
          : Math.max(table[beforeIndex + 1][afterIndex], table[beforeIndex][afterIndex + 1]);
    }
  }

  return table;
}

/** Joins neighbouring tokens that share a status, so a changed phrase is highlighted as one run. */
function mergeRuns(tokens: DiffToken[]): DiffToken[] {
  const runs: DiffToken[] = [];

  for (const token of tokens) {
    const previous = runs.at(-1);
    if (previous && previous.isChanged === token.isChanged) {
      previous.text = `${previous.text} ${token.text}`;
    } else {
      runs.push({ ...token });
    }
  }

  return runs;
}

/** Marks the words that differ between two texts, using their longest common word sequence. */
export function diffWords(beforeText: string, afterText: string): WordDiff {
  const beforeWords = tokenize(beforeText);
  const afterWords = tokenize(afterText);
  const table = buildCommonLengthTable(beforeWords, afterWords);
  const before: DiffToken[] = [];
  const after: DiffToken[] = [];
  let beforeIndex = 0;
  let afterIndex = 0;

  while (beforeIndex < beforeWords.length && afterIndex < afterWords.length) {
    if (beforeWords[beforeIndex] === afterWords[afterIndex]) {
      before.push({ text: beforeWords[beforeIndex++], isChanged: false });
      after.push({ text: afterWords[afterIndex++], isChanged: false });
    } else if (table[beforeIndex + 1][afterIndex] >= table[beforeIndex][afterIndex + 1]) {
      before.push({ text: beforeWords[beforeIndex++], isChanged: true });
    } else {
      after.push({ text: afterWords[afterIndex++], isChanged: true });
    }
  }

  while (beforeIndex < beforeWords.length) before.push({ text: beforeWords[beforeIndex++], isChanged: true });
  while (afterIndex < afterWords.length) after.push({ text: afterWords[afterIndex++], isChanged: true });

  return { before: mergeRuns(before), after: mergeRuns(after) };
}
