import { useState } from "react";
import "./App.css";
import Add from "./components/add";

type Additions = {
  id: string;
  text: string;
};
function App() {
  const [userInput, setUserInput] = useState("");
  const [additions, setAdditions] = useState<Additions[]>([]);
  const handleClick = () => {
    setAdditions([...additions, { id: crypto.randomUUID(), text: userInput }]);
    setUserInput("");
  };
  const handleClose = (id: string) => {
    setAdditions(additions.filter((a) => a.id !== id));
  };

  const handleEdit = (id: string, newtext: string) => {
    setAdditions(
      additions.map((a) => (a.id === id ? { ...a, text: newtext } : a))
    );
  };

  return (
    <>
      <label>Type your task here: </label>
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={() => handleClick()}>➕</button>
      {additions.map((a) => (
        <Add
          key={a.id}
          id={a.id}
          userInput={a.text}
          onClose={() => handleClose(a.id)}
          onEdit={handleEdit}
        />
      ))}
    </>
  );
}

export default App;
