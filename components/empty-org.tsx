import Image from "next/image";

const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image src="./emptyElement.svg" alt="Empty" height={200} width={200} />
      <h2 className="font-semibold text-2xl mt-6">Welcome to RTC Board</h2>
      <p className="text-sm text-muted-foreground mt-2">
        Create an organization to get started
      </p>
    </div>
  );
};

export default EmptyOrg;
