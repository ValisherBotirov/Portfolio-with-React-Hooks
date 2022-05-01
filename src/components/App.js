import React from "react";
import Header from "./Header.js";
import Accordion from "./Accordion.js";
import Search from "./Search.js";
import Dropdown from "./Dropdown.js";
import Translate from "./Translate.js";
import DropdownUzimcha from "./DropdownUzimcha.jsx";

const dataAccordion = [
  { savol: "Qalay", javob: "Zur" },
  { savol: "Qalay", javob: "Zur" },
  { savol: "Qalay", javob: "Zur" },
  { savol: "Qalay", javob: "Zur" },
];

const dataDropdown = [
  { label: "The color red", value: "red" },
  { label: "The color green", value: "green" },
  { label: "The color blue", value: "blue" },
];

console.log(window.location.pathname);
const App = () => {
  const root = () => {
    if (window.location.pathname == "/accordion") {
      return <Accordion data={dataAccordion} />;
    }

    if (window.location.pathname == "/dropdown") {
      return <Dropdown data={dataDropdown} />;
    }

    if (window.location.pathname == "/search") {
      return <Search />;
    }

    if (window.location.pathname == "/translate") {
      return <Translate />;
    }
  };

  return (
    <div>
      <Header />
      {root()}
      {/* <Accordion data={dataAccordion} /> */}
      {/* <Search /> */}
      {/* <Dropdown data={dataDropdown} /> */}
      {/* <DropdownUzimcha data={dataDropdown} /> */}
      {/* <Translate /> */}
    </div>
  );
};

export default App;
