import Kanbanboard from "./components/Kanbanboard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-900">
      <h1 className="text-3xl font-bold text-center py-6">Kanban Board</h1>
      <Kanbanboard />
    </div>
  );
}

export default App;
