import { IPenguin } from "../types/types";

interface Props {
  penguin: IPenguin;
}

export default function PenguinThumbnail({ penguin }: Props) {
  return (
    <div className="flex flex-col border border-solid border-2 w-32 h-32 bg-gray-100 m-3 shadow-sm hover:shadow-lg transition-shadow delay-100 cursor-pointer">
      <div className="m-3 flex justify-center items-center h-full">
        <div className="text-center font-bold">{penguin.name}</div>
      </div>
    </div>
  );
}
