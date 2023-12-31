import { BiCategoryAlt } from "react-icons/bi";

function TrustyBoard() {
  return (
    <div className="w-full flex flex-col items-center bg-emeraldGreen">
      <div className="flex gap-1 items-center justify-center py-6">
        <BiCategoryAlt className="text-xl text-amberYellow" />
        <h2 className="text-2xl  font-bold text-white">Leadership</h2>
      </div>
      <div className="w-2/4 text-center text-white text-lg">
        <p>
          Our leaders share a vision of expanding financial opportunities for
          all Bangladeshi through responsible innovation.
        </p>
      </div>
      <div className="flex w-2/4 justify-between items-center text-white px-8 py-4">
        <div className="p-2 border border-amberYellow rounded-md">
          Executive Team
        </div>
        <div className="p-2 border border-amberYellow rounded-md">
          Board of Directors
        </div>
      </div>
    </div>
  );
}

export default TrustyBoard;
