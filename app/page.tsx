import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LearningPaths from "./components/LearningPaths";
import WhyLearnLift from "./components/WhyLearnLift";
import Outcomes from "./components/Outcomes";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <LearningPaths />
        <WhyLearnLift />
        <Outcomes />
      </main>

      <Footer />
    </>
  );
}