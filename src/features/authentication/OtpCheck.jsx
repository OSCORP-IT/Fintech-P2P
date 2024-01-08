import { MdArrowOutward } from "react-icons/md";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

function OtpCheck() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div>
        <h2 className="text-lg font-semibold py-2">
          Enter The OTP (One Time Password)
        </h2>
        <input
          type="text"
          id="otp"
          placeholder="eg. 1234"
          className="pt-2 bg-gray-200/50 w-full p-2 rounded-full border border-gray-300"
        />
      </div>
      <div className="flex flex-col items-center justify-center py-10">
        <div
          onClick={() => navigate("/register")}
          className="flex items-center gap-1 bg-emeraldGreen hover:bg-emerald-700 px-5 py-2 rounded-md text-white font-semibold cursor-pointer"
        >
          <h3>Send OTP</h3>
          <MdArrowOutward />
        </div>
        <div className="cursor-pointer text-lg py-4 font-semibold hover:text-blue-500 hover:underline">
          <h2>Resend OTP</h2>
        </div>
      </div>
    </Layout>
  );
}

export default OtpCheck;
