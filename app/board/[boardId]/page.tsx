import Canvas from "../_components/canvas";

interface BoardPageProps {
  params: Promise<{
    boardId: string;
  }>;
}

const BoardPage = async ({ params }: BoardPageProps) => {
  const { boardId } = await params;
  return (
    <div>
      <Canvas boardId={boardId} />
    </div>
  );
};

export default BoardPage;
