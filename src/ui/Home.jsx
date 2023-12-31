import AppSection from "./AppSection";
import Halal from "./Halal";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import PersonalLoan from "./PersonalLoan";

function Home() {
  return (
    <div>
      <Hero />
      <PersonalLoan />
      <AppSection />y
      <Halal />
      <Newsletter />
    </div>
  );
}

export default Home;
