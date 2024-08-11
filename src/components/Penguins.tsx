import axios from "axios";
import { useEffect, useState } from "react";
import { IPenguin } from "../types/types";
import PenguinCard from "./PenguinCard";
import PenguinThumbnail from "./PenguinThumbnail";

export default function Penguins() {
  const [penguins, setPenguins] = useState<IPenguin[] | null>(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/penguins")
      .then((response) => {
        console.log(response.data);
        setPenguins([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (penguins == null) return <div></div>;

  return (
    <div>
      <div className="flex justify-center">
        <PenguinCard penguin={penguins[0]} />
      </div>
      <div className="flex justify-center">
        {penguins.map((penguin) => (
          <PenguinThumbnail key={penguin.id} penguin={penguin} />
        ))}
      </div>
    </div>
  );
}
