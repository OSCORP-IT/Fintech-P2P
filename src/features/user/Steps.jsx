import { VscTriangleRight } from "react-icons/vsc";
function Steps() {
  return (
    <div className="flex ml-2 mr-4 items-center text-xl font-semibold justify-between text-gray-600/50">
      <div className="flex items-center py-2 pl-2 text-amber-500">
        <h2>Basic Information</h2>
        <VscTriangleRight />
      </div>
      <div className="flex items-center py-2 ">
        <h2>Professional Information</h2>
        <VscTriangleRight />
      </div>
      <div className="flex items-center py-2 ">
        <h2>Upload Document</h2>
        <VscTriangleRight />
      </div>
      <div className="flex items-center py-2 pr-2">
        <h2>Bank Details</h2>
        <VscTriangleRight />
      </div>
      <h2>Other Contact Verification</h2>
    </div>
  );
}

export default Steps;
