import { useState } from "react";

type OnClose = {
  onClose: () => void;
  id: string;
  userInput: string;
  onEdit: (id: string, text: string) => void;
};

const Add = ({ onClose, id, userInput, onEdit }: OnClose) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(userInput);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(userInput);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <input
          className="edit-input"
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyPress={handleKeyPress}
          autoFocus
        />
        <div className="task-actions">
          <button className="btn-save" onClick={handleSave}>
            ✓ Save
          </button>
          <button className="btn-cancel" onClick={handleCancel}>
            ✕ Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="task-item">
      <span className="task-text">{userInput}</span>
      <div className="task-actions">
        <button className="btn-edit" onClick={() => setIsEditing(true)}>
          ✏️ Edit
        </button>
        <button className="btn-delete" onClick={onClose}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default Add;
