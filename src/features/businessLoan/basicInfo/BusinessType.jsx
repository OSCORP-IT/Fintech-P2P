import OptionsLayout from "../OptionsLayout";
import TopLayout from "../TopLayout";

function BusinessType() {
  return (
    <div>
      <TopLayout question={"What kind of business do you own?"}>
        <OptionsLayout
          answers={[
            "Limited Liability Company | LLC",
            "Sole Proprietorship",
            "Partnership",
            "C Corporation",
            "S Corporation",
          ]}
        />
      </TopLayout>
    </div>
  );
}

export default BusinessType;
