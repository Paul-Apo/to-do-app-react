# 📝 Todo List Application

A modern, responsive Todo List application built with **React** and **TypeScript**. This application allows users to efficiently manage their daily tasks with a clean and intuitive interface.

## ✨ Features

- ✅ **Add Tasks**: Easily add new tasks to your todo list
- ✏️ **Edit Tasks**: Modify existing tasks with inline editing
- 🗑️ **Delete Tasks**: Remove completed or unwanted tasks
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ⌨️ **Keyboard Support**: Press Enter to add tasks, use Escape to cancel edits
- 🎯 **Empty State**: Helpful message when no tasks are present

## 🛠️ Technologies Used

- **React 19.2.0**: Modern UI library with hooks
- **TypeScript**: Type-safe JavaScript for better code quality
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with gradients, animations, and flexbox

## 📋 Project Structure

```
src/
├── App.tsx              # Main application component
├── App.css              # Application styles
├── index.css            # Global styles
├── main.tsx             # Entry point
└── components/
    └── add.tsx          # Task item component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/todoapp.git
cd todoapp
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

**Development Mode:**
```bash
npm run dev
```
The application will start at `http://localhost:5173`

**Build for Production:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm run preview
```

## 💡 How to Use

1. **Add a Task**: 
   - Type your task in the input field
   - Click the "➕ Add" button or press Enter
   
2. **Edit a Task**:
   - Click the "✏️ Edit" button on any task
   - Modify the text in the input field
   - Click "✓ Save" or press Enter to save
   - Click "✕ Cancel" or press Escape to discard changes

3. **Delete a Task**:
   - Click the "🗑️ Delete" button on any task
   - The task will be removed immediately

## 🎨 Design Highlights

- **Gradient Background**: Purple gradient (from #667eea to #764ba2) for an elegant look
- **Card-based Layout**: Each task is displayed as a clean white card
- **Smooth Animations**: Hover effects and transitions for better UX
- **Color-coded Buttons**: 
  - Orange for Edit
  - Red for Delete
  - Green for Save
  - Gray for Cancel
- **Responsive Grid**: Adapts to different screen sizes

## 📦 Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0"
}
```

## 🔧 Development Dependencies

- TypeScript
- Vite
- ESLint
- CSS3 with modern features

## 📝 Key Concepts Implemented

- **React Hooks**: useState for state management
- **TypeScript Types**: Strong typing with interfaces
- **Component Composition**: Reusable Add component
- **Event Handling**: Keyboard and click events
- **CSS Flexbox**: Responsive layout design
- **CSS Animations**: Smooth transitions and transforms

## 🎯 Future Enhancements

- Local storage persistence
- Task categories/tags
- Due dates and reminders
- Dark mode toggle
- Task priority levels
- Search and filter functionality

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a learning project for React and TypeScript fundamentals.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

**Happy Task Managing! 🚀**
