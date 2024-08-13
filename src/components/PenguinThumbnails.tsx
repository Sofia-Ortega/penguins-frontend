import { IPenguin } from "../types/types";
import PenguinThumbnail from "./PenguinThumbnail";

interface Props {
  penguins: IPenguin[];
  setMainPenguinIndex: React.Dispatch<React.SetStateAction<number>>;
  mainPenguinIndex: number;
}

export default function PenguinThumbnails({
  penguins,
  setMainPenguinIndex,
  mainPenguinIndex,
}: Props) {
  return (
    <>
      {penguins.map((penguin, index) => (
        <PenguinThumbnail
          key={penguin.id}
          penguin={penguin}
          index={index}
          setMainPenguinIndex={setMainPenguinIndex}
          selected={index === mainPenguinIndex}
        />
      ))}
    </>
  );
}
