import KanbanBoard from "./components/KanbanBoard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100">
      <h1 className="text-3xl font-bold text-center py-6">Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
}

export default App;
 