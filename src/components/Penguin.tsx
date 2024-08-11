import { IPenguin } from "../types/types";

interface PenguinProps {
  penguin: IPenguin;
}

export default function Penguin({ penguin }: PenguinProps) {
  return (
    <div className="border-solid border-2 border-indigo-600 rounded w-60 h-60 m-3">
      <h2 className="text-center">{penguin.name}</h2>
      <p>Species: {penguin.species}</p>
      <p>Hunger: {penguin.hunger}</p>
      <p>Love: {penguin.love}</p>
    </div>
  );
}
