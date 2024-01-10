import OptionsLayout from "../OptionsLayout";
import TopLayout from "../TopLayout";

function CreditScore() {
  return (
    <div>
      <TopLayout question={"What is you credit score?"}>
        <OptionsLayout
          answers={[
            "Excellent (720+)",
            "Good (680 - 719)",
            "Fair (640 - 679)",
            "Poor (639 or less)",
            "S Corporation",
          ]}
        />
      </TopLayout>
    </div>
  );
}

export default CreditScore;
