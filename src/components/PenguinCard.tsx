import { IPenguin } from "../types/types";
// import rockhopper_400x400 from "../assets/images/rockhopper_400x400.png";

interface PenguinProps {
  penguin: IPenguin;
}

export default function PenguinCard({ penguin }: PenguinProps) {
  const image = require(`../assets/images/${penguin.species.toLowerCase()}_400x400.png`);

  return (
    <div className="flex flex-col border-solid border-2 rounded-lg w-60 h-80 m-3 bg-gray-50 shadow-lg">
      <div className="m-3 flex flex-col justify-around h-full">
        <div>
          <h2 className="text-center">{penguin.name}</h2>
          <div className="text-center text-xs">-- {penguin.species} --</div>
        </div>

        <div className="flex justify-around items-center shadow-md rounded-sm h-36 my-3 bg-blue-200">
          <img className="h-36 w-36" src={image} />
        </div>

        <div>
          <p>Hunger: {penguin.hunger}</p>
          <p>Love: {penguin.love}</p>
        </div>
      </div>
    </div>
  );
}
