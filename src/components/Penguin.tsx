import { IPenguin } from "../types/types";

interface PenguinProps {
  penguin: IPenguin;
}

export default function Penguin({ penguin }: PenguinProps) {
  return (
    <div className="flex flex-col border-solid border-2 rounded-lg w-60 h-80 m-3 bg-gray-50 shadow-lg">
      <div className="m-3 flex flex-col justify-around h-full">
        <div>
          <h2 className="text-center">{penguin.name}</h2>
          <div className="text-center text-xs">-- {penguin.species} --</div>
        </div>

        <div className="border-solid border-2 h-36 my-3"></div>

        <div>
          <p>Hunger: {penguin.hunger}</p>
          <p>Love: {penguin.love}</p>
        </div>
      </div>
    </div>
  );
}
