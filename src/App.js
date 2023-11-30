import Footer from "./componenets/Footer";
import Main from "./componenets/Main";
import Navbar from "./componenets/Navbar";
import "./App.css";
import { useState } from "react";

function App() {

  const [text, setText] = useState("See News");
  const [value, setValue] = useState(false);

  const openBox = () => {
    if (text === 'See News') {
      setText("Close");
      setValue(true);
    }
    else {
      setText("See News");
      setValue(false);
    }

  }

  return (
    <>
      <Navbar />
      <div className="box">
        <h2>What is happening in India Now!!!!</h2>
        <h4>This is one of the leading news Channel in india. here you can get the latest updates about Bharat(India) </h4>
        <button onClick={openBox}>{text}</button>
      </div>

      <div>{
          value &&
        <Main />

      }
      </div>
      <Footer />
    </>
  );
}

export default App;
