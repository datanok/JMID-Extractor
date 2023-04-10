import { useState } from "react";
import Tesseract from "tesseract.js";
import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import ImageConv from "./ImageConv";
import JmConv from "./JmConv";

function App() {
  const [imagePath, setImagePath] = useState("");
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  };

  const handleClick = () => {
    Tesseract.recognize(imagePath, "eng", {
      logger: (m) => console.log(m),
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        // Get Confidence score
        let confidence = result.confidence;
        console.log(confidence);

        console.log(result.data.text);
        const inputString = result.data.text;
        const meetingID = inputString.substring(12, 24).replace(/ /g, "");

        // Use a regular expression to extract the meeting ID and password

        // Extract the meeting ID and password from the match object

        const password = inputString
          .substring(35, 42)
          .trim()
          .replace(/[()]/g, "J");

        // Print the extracted values
        console.log(`Meeting ID: ${meetingID}`);
        console.log(`Password: ${password}`);

        const link = `https://jiomeetpro.jio.com/shortener?meetingId=${meetingID}&pwd=${password}`;

        console.log(link);
        navigator.clipboard.writeText(link);
        setText(link);
      });
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<JmConv />} />
        <Route path="/Image2text" element={<ImageConv />} />
      </Routes>
    </div>
  );
}

export default App;