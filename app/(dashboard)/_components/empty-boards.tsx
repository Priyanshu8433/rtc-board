import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useApiMutation } from "@/hooks/use-api-mutation";

const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    });
  };

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
        <Button disabled={pending} size="lg" onClick={onClick}>
          Create board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
