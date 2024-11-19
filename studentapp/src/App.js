import "./App.css";
import TableCreate from "./components/table";
import "./assets/css/compo.css";
import { students } from "./data/StudentsDb";
import { useState } from "react";

function App() {
  const [fontSize, setFontSize] = useState("16px");
  const changeFontSize = (size) => {
    switch (size) {
      case "small":
        setFontSize("16px");
        break;
      case "medium":
        setFontSize("20px");
        break;
      case "large":
        setFontSize("24px");
        break;
      default:
        setFontSize("16px");
    }
  };
 
  return (
    <>
      
    </>
  );
}

export default App;
