import { IPenguin } from "../types/types";

interface Props {
  penguin: IPenguin;
  index: number;
  setMainPenguinIndex: React.Dispatch<React.SetStateAction<number>>;
  selected: boolean;
}

export default function PenguinThumbnail({
  penguin,
  index,
  setMainPenguinIndex,
  selected,
}: Props) {
  const selectedStyling = "border-violet-500 bg-violet-100 rounded-sm";
  const unselectedStyling = "";

  return (
    <div
      className={`flex flex-col border border-solid border-2 w-32 h-32 bg-gray-100 m-3 shadow-sm hover:shadow-lg transition cursor-pointer
                    ${selected ? selectedStyling : unselectedStyling}`}
      onClick={() => setMainPenguinIndex(index)}
    >
      <div className="m-3 flex justify-center items-center h-full">
        <div className="text-center font-bold">{penguin.name}</div>
      </div>
    </div>
  );
}
