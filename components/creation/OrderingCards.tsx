"use client";

import { useSensors, useSensor, PointerSensor } from "@dnd-kit/core";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { GripVertical } from "lucide-react";
import { motion } from "framer-motion";

import { useSortable } from "@dnd-kit/sortable";

import { arrayMove } from "@dnd-kit/sortable";
import { CardData } from "@/app/types/card";
import { useState } from "react";
import { Active } from "@dnd-kit/core";

import type { CSSProperties } from "react";
import { CSS } from "@dnd-kit/utilities";

import { SortableContext } from "@dnd-kit/sortable";
export const OrderingCards = ({
  cards,
  setCards,
  setCurrentIndex,
  currentIndex,
}: {
  cards: CardData[];
  setCards: (cards: CardData[]) => void;
  setCurrentIndex: (index: number) => void;
  currentIndex: number;
}) => {
  const sensors = useSensors(useSensor(PointerSensor));

  //   const [active, setActive] = useState<Active | null>(null);
  const [activeItem, setActiveItem] = useState<Active | null>(null);
  const [draggableItem, setDraggableItem] = useState<CardData | null>(null);

  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm font-medium">Cards</p>
      <DndContext
        onDragStart={({ active }) => {
          setActiveItem(active);
          setDraggableItem(cards[currentIndex]);
        }}
        onDragEnd={({ active, over }) => {
          if (over) {
            const activeIndex = cards.findIndex(({ id }) => id === active.id);
            const overIndex = cards.findIndex(({ id }) => id === over.id);
            setCards(arrayMove(cards, activeIndex, overIndex));
          }
          setActiveItem(null);
        }}
        onDragCancel={() => {
          setActiveItem(null);
        }}
        sensors={sensors}
      >
        <SortableContext items={cards.map((card) => card.id)}>
          {cards.map((card, index) => (
            <CardDetails
              card={card}
              index={index}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              key={card.id}
            />
          ))}
        </SortableContext>
        <DragOverlay>
          {activeItem ? (
            <div className="bg-white z-10 relative border cursor-pointer  flex items-center gap-2 rounded-xl p-2 shadow-sm">
              <GripVertical className="h-4 w-4 cursor-grab" />
              <p className="text-sm font-medium">{draggableItem?.question}</p>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

const CardDetails = ({
  card,
  index,
  currentIndex,
  setCurrentIndex,
}: {
  card: CardData;
  index: number;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: card.id });

  const style: CSSProperties = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <div
      key={card.id}
      onClick={() => setCurrentIndex(index)}
      ref={setNodeRef}
      style={style}
      className={
        index === currentIndex
          ? "bg-white z-10 relative border cursor-pointer  flex items-center gap-2 rounded-xl p-2 shadow-sm"
          : "bg-white z-10 relative cursor-pointer hover:shadow-md transition-all duration-300 flex items-center gap-2 rounded-xl p-2 shadow-sm"
      }
    >
      {index === currentIndex && (
        <motion.div
          layout="position"
          layoutId="current-card"
          className="absolute inset-0 -z-10 rounded-xl border border-gray-500 bg-white"
        />
      )}
      <GripVertical
        className="h-4 w-4 cursor-grab"
        {...attributes}
        {...listeners}
      />
      <p className="text-sm font-medium">{card.question}</p>
    </div>
  );
};

