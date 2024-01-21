// import { MdArrowOutward } from "react-icons/md";
import Layout from "./Layout";
import { RiLockPasswordFill } from "react-icons/ri";
import Input from "./Input";
import Button from "../../ui/Button";

function OtpCheck() {
  // const navigate = useNavigate();
  return (
    <Layout>
      <div className="w-full px-4">
        <Input
          type="text"
          name="otp"
          id="otp"
          placeholder="OTP (One time Password)"
          required={true}
        >
          <RiLockPasswordFill className="text-xl" />
        </Input>
        <div className="pt-6 pb-4">
          <Button
            addedClass={
              "py-3 w-full text-center text-white bg-textColor1 text-lg font-semibold"
            }
          >
            Confirm OTP
          </Button>
        </div>
        <div>
          <Button
            addedClass={
              "py-3 w-full text-center text-textColor1 border-2 border-textColor1 text-lg font-semibold"
            }
            hover={"hover:bg-gray-200"}
          >
            Resend OTP
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default OtpCheck;
