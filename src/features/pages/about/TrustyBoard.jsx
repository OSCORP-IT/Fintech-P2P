import Button from "../../../ui/Button";

function TrustyBoard() {
  return (
    <div className="w-full flex flex-col items-center bg-emeraldGreen">
      <div className="flex gap-1 items-center justify-center py-6">
        <h2 className="text-3xl  font-bold text-textColor1">Leadership</h2>
      </div>
      <div className="w-2/4 text-center text-textColor1 text-2xl font-medium py-4">
        <p>
          Our leaders share a vision of expanding financial opportunities for
          all Bangladeshi through responsible innovation.
        </p>
      </div>
      <div className="flex w-2/4 justify-between items-center px-8 py-4">
        <Button addedClass={"bg-accentColor py-3 px-2 text-white"}>
          Executive Team
        </Button>
        <Button addedClass={"bg-accentColor py-3 px-2 text-white"}>
          Board of Directors
        </Button>
      </div>
    </div>
  );
}

export default TrustyBoard;
