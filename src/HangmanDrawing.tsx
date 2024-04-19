const HEAD = (
  <div className="w-[50px] h-[50px] border-black rounded-full border-8 absolute top-[50px] -right-[20px]" />
);
const BODY = (
  <div className="w-2.5 h-[100px] bg-black absolute top-[100px] right-0" />
);
const RIGHT_ARM = (
  <div className="h-2.5 w-20 bg-black absolute top-36 -right-16 rotate-45" />
);
const LEFT_ARM = (
  <div className="h-2.5 w-20 bg-black absolute top-36 -right-2 -rotate-45" />
);
const RIGHT_LEG = (
  <div className="h-2.5 w-20 bg-black absolute top-[220px] -right-16 rotate-45" />
);
const LEFT_LEG = (
  <div className="h-2.5 w-20 bg-black absolute top-[220px] -right-2 -rotate-45" />
);
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="w-2.5 h-[50px] bg-black top-0 right-0 absolute" />
      <div className="w-[200px] h-2.5 bg-black ml-[120px]" />
      <div className="h-[400px] w-2.5 bg-black ml-[120px]" />
      <div className="h-2.5 w-[250px] bg-black" />
    </div>
  );
}
