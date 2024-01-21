import Layout from "./Layout";
import { FaGlobe } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import Input from "./Input";
import Button from "../../ui/Button";

function Join() {
  return (
    <Layout>
      <div className="w-full px-4">
        <div className="w-full rounded-md border-2 border-textColor1 text-textColor1 flex gap-2 items-center justify-between pl-4 pr-4">
          <FaGlobe className="text-xl" />
          <select name="country" id="country" className="py-3 flex-grow">
            <option value="">Country Code</option>
            <option value="bd">Bangladesh (+88)</option>
            <option value="ind">India (+90)</option>
          </select>
        </div>
        <Input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          required={true}
        >
          <FaMobile className="text-xl" />
        </Input>
        <div className="pt-6 py-8">
          <Button
            addedClass={
              "py-3 w-full text-center text-white bg-textColor1 text-lg font-semibold"
            }
          >
            Next
          </Button>
        </div>
        <h2 className="text-center text-textColor3 capitalize">
          already have an account?
          <strong className="cursor-pointer text-textColor1"> Sign in</strong>
        </h2>
      </div>
    </Layout>
  );
}

export default Join;
