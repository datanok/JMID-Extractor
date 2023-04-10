import { useState } from "react";
import Tesseract from "tesseract.js";
import "./App.css";
import Navbar from "./Navbar";

function ImageConv() {
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
        const text = result.data.text;

        // Use a regular expression to extract the meeting ID and password

        // Extract the meeting ID and password from the match object

        navigator.clipboard.writeText(text);
        setText(text);
      });
  };

  return (
    <main className="flex flex-col">
      {imagePath && <img src={imagePath} className="mx-auto mt-4" alt="logo" />}

      <h3 className="text-xl font-bold text-white text-center my-4">
        Extracted text
      </h3>
      <div className="text-box">
        <p className="text-[#b8c1ec] text-lg text-center hover:font-bold">
          {" "}
          <a href={text}>{text} </a>
        </p>
      </div>
      <input
        class="block w-[50%] mx-auto my-5 text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        onChange={handleChange}
      />

      <button
        onClick={handleClick}
        className="bg-[#eebbc3] rounded-lg hover:bg-blue-200  hover:text-black w-32 mx-auto p-2"
      >
        {" "}
        convert to text
      </button>
    </main>
  );
}

export default ImageConv;
