import { IPenguin } from "../types/types"

interface PenguinProps {
    penguin: IPenguin
}

export default function Penguin({penguin} : PenguinProps) {
    return (
        <div>
            <h2>{penguin.name}</h2>
            <p>Species: {penguin.species}</p>
            <p>Hunger: {penguin.hunger}</p>
            <p>Love: {penguin.love}</p>
        </div>

    )

}