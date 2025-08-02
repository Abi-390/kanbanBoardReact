export default function KanbanCard({ card, onDelete }) {
  return (
    <div
      draggable
      onDragStart={(e) => e.dataTransfer.setData("cardId", card.id)}
      className="bg-slate-800 text-gray-200 p-4 my-3 rounded-xl shadow shadow-cyan-900 cursor-grab transition hover:scale-105 hover:bg-slate-700 select-none relative"
    >
      {card.title}
      <button
        onClick={() => onDelete(card.id)}
        className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs"
        title="Delete card"
      >
        &times;
      </button>
    </div>
  );
}
