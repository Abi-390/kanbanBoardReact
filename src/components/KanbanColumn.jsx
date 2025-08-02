import React, { useState } from "react";
import KanbanCard from "./KanbanCard";

export default function KanbanColumn({
  column,
  cards,
  moveCard,
  addCard,
  deleteCard,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const cardId = Number(e.dataTransfer.getData("cardId"));
    moveCard(cardId, column);
  };

  return (
    <div
      className="
    bg-slate-300 rounded-2xl shadow-lg shadow-cyan-900 p-4
    flex-1 min-w-[85vw] sm:min-w-[320px] md:min-w-[280px]
    max-w-full md:max-w-[400px]
    transition-all duration-300 border border-slate-800
  "
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2 className="font-bold text-xl mb-6 text-cyan-00 tracking-tight">
        {column}
      </h2>
      {cards.map((card) => (
        <KanbanCard key={card.id} card={card} onDelete={deleteCard} />
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputValue.trim()) {
            addCard(column, inputValue.trim());
            setInputValue("");
          }
        }}
        className="mt-6 flex"
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a card"
          className="bg-slate-700 text-gray-200 placeholder-gray-400 border border-cyan-600 focus:border-cyan-400 rounded-l px-2 py-1 flex-1"
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1 rounded-r font-medium transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}
