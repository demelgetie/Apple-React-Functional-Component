import { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import AlertSection from "./Components/Main_Body/AlertSection.jsx";
import SectionOne from "./Components/Main_Body/SectionOne.jsx";
import SectionTwo from './Components/Main_Body/SectionTwo.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AlertSection />
      <SectionOne />
      <SectionTwo />

      <Footer />
    </>
  );
}

export default App;
