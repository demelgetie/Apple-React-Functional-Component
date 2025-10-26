import { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import AlertSection from "./Components/Main_Body/AlertSection.jsx";
import SectionOne from "./Components/Main_Body/SectionOne.jsx";
import SectionTwo from './Components/Main_Body/SectionTwo.jsx'
import SectionThree from "./Components/Main_Body/SectionThree.jsx";
import SectionFour from "./Components/Main_Body/SectionFour.jsx";
import SectionFive from "./Components/Main_Body/SectionFive.jsx";
import SectionSix from "./Components/Main_Body/SectionSix.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AlertSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </>
  );
}

export default App;
