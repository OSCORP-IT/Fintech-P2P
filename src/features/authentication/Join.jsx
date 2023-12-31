import Layout from "./Layout";

import { MdArrowOutward } from "react-icons/md";
function Join() {
  return (
    <Layout>
      <div className="p-2">
        <div className="py-2">
          <label htmlFor="select" className="mb-2 text-lg font-semibold">
            Enter Country Code
          </label>

          <select
            id="select"
            className="bg-gray-200/50 p-2 border border-gray-300 rounded-full w-full flex-grow font-semibold"
          >
            <option value="bd">Bangladesh (+88)</option>
            <option value="ind">India (+99)</option>
            <option value="nep">Nepal (+09)</option>
          </select>
        </div>
        <div>
          <label htmlFor="input" className="text-lg font-semibold">
            Enter Your Phone Number
          </label>
          <input
            type="text"
            id="input"
            placeholder="01234567890"
            className="bg-gray-200/50 w-full p-2 rounded-full border border-gray-300"
          />
        </div>
        <div className="flex justify-center py-8">
          <div className="flex items-center gap-1 bg-emeraldGreen px-5 py-2 rounded text-white font-semibold cursor-pointer">
            <h3>Send OTP</h3>
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Join;
