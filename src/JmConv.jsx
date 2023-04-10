import { useState } from "react";
import Tesseract from "tesseract.js";

import { Routes, Route } from "react-router-dom";
import ImageConv from "./ImageConv";

function JmConv() {
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

export default JmConv;
