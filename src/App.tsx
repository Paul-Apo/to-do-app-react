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
    if (userInput.trim()) {
      setAdditions([...additions, { id: crypto.randomUUID(), text: userInput }]);
      setUserInput("");
    }
  };

  const handleClose = (id: string) => {
    setAdditions(additions.filter((a) => a.id !== id));
  };

  const handleEdit = (id: string, newtext: string) => {
    setAdditions(
      additions.map((a) => (a.id === id ? { ...a, text: newtext } : a))
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="app-container">
      <h1>📝 My Tasks</h1>
      <div className="input-section">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
        />
        <button className="add-button" onClick={handleClick}>
          ➕ Add
        </button>
      </div>

      {additions.length === 0 ? (
        <div className="empty-state">
          No tasks yet. Add one to get started! 🚀
        </div>
      ) : (
        <div className="tasks-container">
          {additions.map((a) => (
            <Add
              key={a.id}
              id={a.id}
              userInput={a.text}
              onClose={() => handleClose(a.id)}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
