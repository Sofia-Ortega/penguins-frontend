import { useEffect, useState } from "react";
import { IPenguin } from "../types/types";
import PenguinCard from "./PenguinCard";
import PenguinThumbnail from "./PenguinThumbnail";
import FeedButton from "./FeedButton";
import { feedPenguin, getPenguins } from "../services/penguinService";

export default function Penguins() {
  const [penguins, setPenguins] = useState<IPenguin[] | null>(null);
  const [mainPenguinIndex, setMainPenguinIndex] = useState<number>(0);
  const [err, setErr] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPenguins();
        setPenguins(data);
      } catch (err) {
        setErr(true);
      }
    })();
  }, []);

  const handleFeedClick = async () => {
    if (penguins == null) return;

    const { id } = penguins[mainPenguinIndex];
    const updatedHunger = await feedPenguin(id);

    setPenguins(
      penguins.map((penguin) =>
        penguin.id === id ? { ...penguin, hunger: updatedHunger } : penguin
      )
    );
  };

  if (penguins == null) return <div></div>;
  if (err) return <div>Server Error</div>;

  return (
    <div>
      <div className="flex justify-center">
        <PenguinCard penguin={penguins[mainPenguinIndex]} />
      </div>

      <div className="flex justify-center">
        <FeedButton onClick={handleFeedClick} />
      </div>

      <div className="flex justify-center my-8">
        {penguins.map((penguin, index) => (
          <PenguinThumbnail
            key={penguin.id}
            penguin={penguin}
            index={index}
            setMainPenguinIndex={setMainPenguinIndex}
            selected={index === mainPenguinIndex}
          />
        ))}
      </div>
    </div>
  );
}
