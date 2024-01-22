import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillShieldLockFill } from "react-icons/bs";
import Input from "./Input";
import Layout from "./Layout";
import Button from "../../ui/Button";

function Registration() {
  return (
    <Layout>
      <div className="w-full px-4">
        <Input
          type="text"
          name="fullName"
          id="fullname"
          placeholder="Full Name"
          required={true}
        >
          <FaUser className="text-xl" />
        </Input>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          required={true}
        >
          <MdEmail className="text-xl" />
        </Input>
        <Input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          required={true}
        >
          <RiLockPasswordFill className="text-xl" />
        </Input>
        <Input
          type="text"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm Password"
          required={true}
        >
          <BsFillShieldLockFill className="text-xl" />
        </Input>
        <div className="pt-6">
          <Button
            addedClass={
              "py-3 w-full text-center text-white bg-textColor1 text-lg font-semibold"
            }
          >
            Sign Up
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default Registration;
