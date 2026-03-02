import List from "./list";
import NewButton from "./new-button";

export const SideBar = () => {
  return (
    <aside className="bg-emerald-950 w-15 h-full flex flex-col py-3 items-center text-white space-y-4">
      <List />
      <NewButton />
    </aside>
  );
};
