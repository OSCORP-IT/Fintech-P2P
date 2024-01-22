import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import Button from "../../../ui/Button";
function ContactForm() {
  return (
    <div className="w-1/2 rounded-xl bg-gradient-to-tr from-bgGradient2 via-teal-700 to-bgGradient1 p-8">
      <Form>
        <FormInput
          type={"text"}
          id={"name"}
          placeholder={"Your Name"}
          required={true}
        />
        <FormInput
          type={"text"}
          id={"phone"}
          placeholder={"Your Phone"}
          required={true}
        />
        <FormInput
          type={"email"}
          id={"email"}
          placeholder={"Your email"}
          required={true}
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="8"
          placeholder="Your Message"
          className="w-full rounded-lg p-4"
        ></textarea>
        <div className="pt-4">
          <Button addedClass={"py-2 w-full text-white bg-accentColor"}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
