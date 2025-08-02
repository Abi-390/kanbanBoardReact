import KanbanColumn from "./KanbanColumn";
import { useLocalStorage } from "../hooks/useLocalStorage";

const columns = ["To Do", "In Progress", "Done"];
const initialData = [
  { id: 1, column: "To Do", title: "First Task" },
  { id: 2, column: "In Progress", title: "Second Task" },
  { id: 3, column: "Done", title: "Third Task" },
];

export default function Kanbanboard() {
  const [cards, setCards] = useLocalStorage("kanban-cards", initialData);

  const moveCard = (id, newColumn) => {
    setCards((cards) =>
      cards.map((card) =>
        card.id === id ? { ...card, column: newColumn } : card
      )
    );
  };

  const addCard = (column, title) => {
    setCards((cards) => [...cards, { id: Date.now(), column, title }]);
  };

  const deleteCard = (id) => {
    setCards((cards) => cards.filter((card) => card.id !== id));
  };

  return (
    <div
      className="
    flex flex-col md:flex-row md:flex-wrap 
    gap-4 md:gap-6 
    w-full max-w-7xl mx-auto p-2 
    overflow-x-auto md:overflow-x-visible
    min-h-[60vh]
  "
    >
      {columns.map((col) => (
        <KanbanColumn
          key={col}
          column={col}
          cards={cards.filter((card) => card.column === col)}
          moveCard={moveCard}
          addCard={addCard}
          deleteCard={deleteCard}
        />
      ))}
    </div>
  );

}
