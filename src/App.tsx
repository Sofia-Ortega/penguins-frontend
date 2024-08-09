import Penguin from "./components/Penguin";

function App() {
  return (
    <div>
      <Penguin penguin={{id: 1, name: "Pablo", species: "Emperor Penguin", hunger: 10, love: 10}} />
      <Penguin penguin={{id: 1, name: "Joe", species: "Emperor Penguin", hunger: 10, love: 10}} />
    </div>
  );
}

export default App;
