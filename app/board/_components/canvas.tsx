"use client";

import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <div className="bg-neutral-100 h-screen w-full p-2">
      <Info />
      <Participants />
      <Toolbar />
    </div>
  );
};

export default Canvas;
