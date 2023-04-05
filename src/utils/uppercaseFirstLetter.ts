export function UpperCaseFirstLetter(word: string) {
  const firstLetter = word.slice(0, 1);
  const firstLetterUpperCase = firstLetter.toUpperCase();

  return firstLetterUpperCase + word.slice(1);
}
