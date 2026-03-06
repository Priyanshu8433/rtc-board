import Image from "next/image";

const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image
        src="./empty-search.svg"
        alt="No results"
        height={200}
        width={200}
      />
      <h2 className="font-semibold text-2xl mt-6">No results found!</h2>
      <p className="text-sm text-muted-foreground mt-2">
        Try searching something else
      </p>
    </div>
  );
};

export default EmptySearch;
