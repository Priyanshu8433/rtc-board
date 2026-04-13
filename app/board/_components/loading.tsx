import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="bg-neutral-100 h-screen w-full p-2 flex justify-center items-center">
      <Loader className="animate-spin" />
    </div>
  );
};

export default Loading;
