import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import { ImOffice } from "react-icons/im";
import { PiDeviceMobileFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-5/6 py-[60px] flex gap-8">
        <ContactDetails />
        <ContactForm />
      </div>
      <div className="flex justify-between items-center w-5/6 pb-6">
        <div className="flex items-center gap-4">
          <div className="bg-textColor2 text-center rounded-md text-3xl p-3 text-teal-400">
            <ImOffice />
          </div>
          <div>
            <h2 className="text-[25px] font-bold leading-snug text-textColor1">
              Our Location
            </h2>
            <h5 className="text-textColor3 text-base font-medium">
              Gulshan 2, Dhaka, Bangladesh.
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-textColor2 text-center rounded-md text-3xl p-3 text-teal-400">
            <PiDeviceMobileFill />
          </div>
          <div>
            <h2 className="text-[25px] font-bold leading-snug text-textColor1">
              Phone Number
            </h2>
            <h5 className="text-textColor3 text-base font-medium">
              (+880) xxxxxxxx
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-textColor2 text-center rounded-md text-3xl p-3 text-teal-400">
            <MdEmail />
          </div>
          <div>
            <h2 className="text-[25px] font-bold leading-snug text-textColor1">
              Email Address
            </h2>
            <h5 className="text-textColor3 text-base font-medium">
              example@company.com
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
