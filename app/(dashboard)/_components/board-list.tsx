import EmptyBoards from "./empty-boards";
import EmptyFavorites from "./empty-favorites";
import EmptySearch from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorite?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorite) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify(query)}</div>;
};

export default BoardList;
