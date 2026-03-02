"use client";

import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from "@clerk/nextjs";
import SearchInput from "./search-input";
import InviteButton from "./invite-button";

const NavBar = () => {
  const { organization } = useOrganization();
  return (
    <div className="w-full p-4 flex gap-x-4">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                width: "100%",
                maxWidth: "380px",
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
      </div>
      {organization && <InviteButton />}

      <UserButton />
    </div>
  );
};

export default NavBar;
