import BusinessLocation from "./BusinessLocation";
import Industry from "./Industry";

function BusinessInfo() {
  let step = 2;
  return (
    <div>
      {step == 1 && <Industry />}
      {step == 2 && <BusinessLocation />}
    </div>
  );
}

export default BusinessInfo;
