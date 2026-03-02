import NavBar from "./_components/navbar";
import OrgSideBar from "./_components/org-sidebar";
import { SideBar } from "./_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="flex h-screen w-full">
      <SideBar />
      <div className="flex w-full gap-x-4">
        <OrgSideBar />
        <div className="w-full">
          <NavBar />
          {children}
        </div>
      </div>
    </main>
  );
};

export default layout;
