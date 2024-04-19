import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  addGuessedLetter: (letter: string) => void;
  activeLetters: string[];
  inactiveLetters: string[];
  disabled?: boolean;
};

export default function Keyboard({
  addGuessedLetter,
  activeLetters,
  inactiveLetters,
  disabled = false,
}: KeyboardProps) {
  return (
    <div
      className="grid gap-2 mx-4"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr)" }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            onClick={() => {
              addGuessedLetter(key);
            }}
            className={`${styles.btn} ${isActive && styles.active} ${
              isInactive && styles.inactive
            }`}
            key={key}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
