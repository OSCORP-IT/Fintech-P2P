import GradientHeader from "../../../ui/GradientHeader";
import contact from "../../../assets/contact.png";
function ContactDetails() {
  return (
    <div className="w-1/2">
      <GradientHeader to={"l"} addedClass={"text-[55px] font-bold"}>
        Get In Touch With Us
      </GradientHeader>
      <p className="text-textColor3 text-base font-normal pt-4 pb-10">
        Lorem ipsum dolor sit amet consectetur. Purus bibendum turpis
        consectetur donec. Lorem potenti at ullamcorper aliquam ut. Non risus
        accumsan at sit. Ipsum nibh non magna morbi commodo proin eget augue
        porttitor. Laoreet nunc consequat purus viverra tortor consectetur ut id
        est.
      </p>
      <img src={contact} alt="contact" />
    </div>
  );
}

export default ContactDetails;
