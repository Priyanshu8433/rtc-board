const Toolbar = () => {
  return (
    <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-y-4">
      <div className="bg-white shadow-md rounded-md flex flex-col items-center p-1.5 gap-y-1">
        <div>Pencil</div>
        <div>Circle</div>
        <div>Square</div>
        <div>Eraser</div>
      </div>
      <div className="bg-white shadow-md rounded-md flex flex-col items-center p-1.5 gap-y-1">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};

export default Toolbar;
