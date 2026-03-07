import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then(() => {
        toast.success("Board created");
        // TODO: redirect to board/{id}
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <Button
      variant="outline"
      className="h-full w-full flex flex-col"
      onClick={onClick}
      disabled={pending || disabled}
    >
      <Plus className="h-8! w-8! text-muted-foreground" />
      <p className="text-sm text-muted-foreground">New board</p>
    </Button>
  );
};

export default NewBoardButton;
