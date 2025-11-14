import { useState } from "react";

type OnClose = {
  onClose: () => void;
  id: string;
  userInput: string;
  onEdit: (id: string, text: string) => void;
};

const add = ({ onClose, id, userInput, onEdit }: OnClose) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(userInput);

  const handleSave = () => {
    onEdit(id, editText);
    setIsEditing(false);
  };
  const handleCancel = () => {
    onEdit(id, userInput);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button onClick={handleCancel}>close</button>
        <button onClick={handleSave}>save</button>
      </>
    );
  }
  return (
    <div>
      {userInput}
      <button onClick={onClose}>X</button>
      <button onClick={() => setIsEditing(true)}>✏️</button>
    </div>
  );
};

export default add;
