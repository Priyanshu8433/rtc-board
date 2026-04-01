"use client";

import Image from "next/image";
import Link from "next/link";
import Overlay from "./overlay";
import Footer from "./footer";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "@/components/actions";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}

const BoardCard = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });
  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(
    api.board.favorite,
  );
  const { mutate: onUnFavorite, pending: pendingUnFavorite } = useApiMutation(
    api.board.unfavorite,
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      onUnFavorite({ id }).catch(() => toast.error("Failed to unfavorite"));
    } else {
      onFavorite({ id, orgId }).catch(() => toast.error("Failed to favorite"));
    }
  };

  const handleFavorite = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    e.preventDefault();

    toggleFavorite();
  };

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-100/120 border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className="object-center" />
          <Overlay />
          <Actions side="right" id={id} title={title}>
            <Button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 bg-transparent hover:bg-transparent">
              <MoreVertical className="text-white opacity-75 hover:opacity-100 transition-opacity h-5! w-5!" />
            </Button>
          </Actions>
        </div>
        <Footer
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          isFavorite={isFavorite}
          disabled={pendingFavorite || pendingUnFavorite}
          onClick={handleFavorite}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div>
      <div className=" aspect-100/120 rounded-lg self-start">
        <Skeleton className="h-full w-full" />
      </div>
    </div>
  );
};

export default BoardCard;
