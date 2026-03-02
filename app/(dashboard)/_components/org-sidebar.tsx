"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const OrgSideBar = () => {
  const searhParams = useSearchParams();
  const favorite = searhParams.get("favorite");

  return (
    <div className="w-58 p-4 hidden lg:flex flex-col items-center gap-y-6">
      <div className="flex gap-2">
        <Image src="./logo.svg" height={60} width={60} alt="logo" />
        <span className={cn("font-bold", font.className)}>RTC Board</span>
      </div>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              width: "100%",
            },
            organizationSwitcherTrigger: {
              width: "100%",
              padding: "8px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid #eeeeee",
            },
            avatarBox: {
              height: "28px",
              width: "28px",
            },
          },
        }}
      />

      <div className="w-full space-y-1">
        <Button
          asChild
          size="lg"
          variant={favorite ? "ghost" : "secondary"}
          className="font-normal justify-start px-2"
        >
          <Link href="/">
            <LayoutDashboard className="h-4! w-4! mr-2" />
            <span>Team Boards</span>
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant={favorite ? "secondary" : "ghost"}
          className="font-normal justify-start px-2"
        >
          <Link
            href={{
              pathname: "/",
              query: { favorite: true },
            }}
          >
            <Star className="h-4! w-4! mr-2" />
            <span>Favorite Boards</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrgSideBar;
