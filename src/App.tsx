import Penguin from "./components/Penguin";
import Penguins from "./components/Penguins";

function App() {
    return (
        <div>
            <Penguins />
            <div>
                <Penguin
                    penguin={{
                        id: 1,
                        name: "Pablo",
                        species: "Emperor Penguin",
                        hunger: 10,
                        love: 10,
                    }}
                />
                <Penguin
                    penguin={{
                        id: 1,
                        name: "Joe",
                        species: "Emperor Penguin",
                        hunger: 10,
                        love: 10,
                    }}
                />
            </div>
        </div>
    );
}

export default App;
