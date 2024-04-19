type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="flex gap-4 text-8xl font-semibold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-8 border-black" key={index}>
          <span
            className={`
              ${
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "invisible"
              } ${
              !guessedLetters.includes(letter) && reveal
                ? "text-red-400"
                : "text-black"
            }
            `}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
