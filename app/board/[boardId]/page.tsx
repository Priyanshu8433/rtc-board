import Canvas from "../_components/canvas";
import Loading from "../_components/loading";

import { Room } from "../_components/room";

interface BoardPageProps {
  params: Promise<{
    boardId: string;
  }>;
}

const BoardPage = async ({ params }: BoardPageProps) => {
  const { boardId } = await params;

  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
};

export default BoardPage;
