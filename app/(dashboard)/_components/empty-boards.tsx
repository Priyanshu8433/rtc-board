import { Button } from "@/components/ui/button";
import Image from "next/image";

const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image
        src="./empty-boards.svg"
        alt="No boards"
        height={200}
        width={200}
      />
      <h2 className="font-semibold text-2xl mt-6">No boards found!</h2>
      <p className="text-sm text-muted-foreground mt-2">
        Start by creating a boards for your organization
      </p>
      <div className="mt-6">
        <Button size="lg">Create board</Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
