import React, { useRef } from "react";
import Header from "./Header/Header";
import Home from "./Component/Home";
import Work from "./Component/Work";
import MySkills from "./Component/MySkills";
import Education from "./Component/Education";
import Contact from "./Component/Contact";

const App = () => {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const workRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div style={{ width: "100%" }}>
      <Header
        skillRef={skillRef}
        homeRef={homeRef}
        workRef={workRef}
        educationRef={educationRef}
        contactRef={contactRef}
      />
      <Home ref={homeRef} />
      <Work ref={workRef} />
      <MySkills ref={skillRef} />
      <Education ref={educationRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default App;
