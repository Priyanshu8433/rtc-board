"use client";

import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";
import Loading from "./loading";
import { useSelf } from "@liveblocks/react/suspense";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const info = useSelf((me) => me.info);
  // if (!info) return <Loading />;
  console.log(info);

  return (
    <div className="bg-neutral-100 h-screen w-full p-2">
      <Info />
      <Participants />
      <Toolbar />
    </div>
  );
};

export default Canvas;
