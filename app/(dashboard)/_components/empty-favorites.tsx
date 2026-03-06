import Image from "next/image";

const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image
        src="./empty-favorites.svg"
        alt="No favorites"
        height={200}
        width={200}
      />
      <h2 className="font-semibold text-2xl mt-6">No favorites found!</h2>
      <p className="text-sm text-muted-foreground mt-2">
        Add a board to favorites
      </p>
    </div>
  );
};

export default EmptyFavorites;
