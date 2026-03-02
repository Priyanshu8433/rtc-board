import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square ">
          <Hint
            label="Create organization"
            side="right"
            align="center"
            sideOffset={8}
          >
            <Button
              variant="ghost"
              className="w-full h-full bg-white/25 hover:bg-white/25 opacity-70 hover:opacity-100 transition"
            >
              <Plus className="text-white" size={40} />
            </Button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent
        className="p-0 bg-transparent border-none max-w-120 shadow-none"
        showCloseButton={false}
      >
        <DialogTitle className="hidden">Create Organisation</DialogTitle>
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
