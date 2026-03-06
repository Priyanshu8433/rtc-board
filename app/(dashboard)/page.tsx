"use client";

import EmptyOrg from "@/components/empty-org";
import { useOrganization } from "@clerk/nextjs";
import { use } from "react";
import BoardList from "./_components/board-list";

interface HomepageProps {
  searchParams: Promise<{
    search?: string;
    favorite?: string;
  }>;
}

export default function Home({ searchParams }: HomepageProps) {
  const { organization } = useOrganization();
  const query = use(searchParams);
  return (
    <div className="p-3 h-[calc(100vh-68px)]">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={query} />
      )}
    </div>
  );
}
