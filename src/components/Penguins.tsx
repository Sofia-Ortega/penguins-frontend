import axios from "axios";
import { useEffect, useState } from "react";
import { IPenguin } from "../types/types";
import Penguin from "./Penguin";

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
      {penguins.map((penguin) => (
        <Penguin key={penguin.id} penguin={penguin} />
      ))}
    </div>
  );
}
