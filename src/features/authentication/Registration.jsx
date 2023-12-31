import { MdArrowOutward } from "react-icons/md";
import Input from "./Input";
import Layout from "./Layout";

function Registration() {
  return (
    <Layout>
      <div className="flex gap-2 w-full ">
        <div className="flex-grow">
          <Input
            label="First Name"
            id="first"
            placeholder="Enter First Name"
            type="text"
            required={true}
          />
        </div>
        <div className="flex-grow">
          <Input
            label="Last Name"
            id="Last"
            placeholder="Enter Last Name"
            type="text"
            required={true}
          />
        </div>
      </div>
      <div>
        <Input
          label="Enter E-mail ID"
          id="email"
          placeholder="abc@comapny.com"
          type="email"
          required={true}
        />
      </div>
      <div className="flex gap-2 w-full ">
        <div className="flex-grow">
          <Input
            label="Password"
            id="pass"
            placeholder="********"
            type="password"
            required={true}
          />
        </div>
        <div className="flex-grow">
          <Input
            label="Confirm Password"
            id="confirm_pass"
            placeholder="********"
            type="password"
            required={true}
          />
        </div>
      </div>
      <div className="flex justify-center py-8">
        <div className="flex items-center gap-1 bg-emeraldGreen px-5 py-2 rounded text-white font-semibold cursor-pointer">
          <h3>Next</h3>
          <MdArrowOutward />
        </div>
      </div>
    </Layout>
  );
}

export default Registration;
