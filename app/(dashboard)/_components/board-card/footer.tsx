import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

const Footer = ({
  title,
  createdAtLabel,
  isFavorite,
  authorLabel,
  onClick,
  disabled,
}: FooterProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="text-base truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="text-muted-foreground opacity-0 group-hover:opacity-100">
        {authorLabel}, {createdAtLabel}
      </p>
      <Button
        disabled={disabled}
        onClick={onClick}
        variant="ghost"
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-orange-500",
          disabled && "cursor-not-allowed opacity-75",
        )}
      >
        <Star
          className={cn(
            "h-4! w-4!",
            isFavorite && "fill-orange-500 text-orange-500",
          )}
        />
      </Button>
    </div>
  );
};

export default Footer;
