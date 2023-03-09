export default function UpperCaseFirstLetter(palavra: string) {
  const FirstLetter = palavra.slice(0, 1);
  const FirstLetterUpperCase = FirstLetter.toUpperCase();

  return FirstLetterUpperCase + palavra.slice(1);
}
