import AnnualRevenue from "./AnnualRevenue";
import BusinessType from "./BusinessType";
import CreditScore from "./CreditScore";
import FundSeeking from "./FundSeeking";
import LoanAmount from "./LoanAmount";
import StartBusiness from "./StartBusiness";

function BasicInfo() {
  let step = 6;
  return (
    <div>
      {step == 1 && <BusinessType />}
      {step == 2 && <CreditScore />}
      {step == 3 && <LoanAmount />}
      {step == 4 && <AnnualRevenue />}
      {step == 5 && <StartBusiness />}
      {step == 6 && <FundSeeking />}
    </div>
  );
}

export default BasicInfo;
