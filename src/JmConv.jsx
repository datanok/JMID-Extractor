import { useState } from "react";
import Tesseract from "tesseract.js";
import React from "react";
import MeetInfo from "./MeetInfo";

function JmConv() {
  const [imagePath, setImagePath] = useState("");
  const [text, setText] = useState("");
  const [rcText, setRcText] = useState("");
  const [meet, setMeet] = useState("");
  const [pass, setPass] = useState("");
  const [info, showInfo] = useState(false);

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

        const text = String(result.data.text).replace(/\n/g, " ");
        const processedText = text.replace(/(\d)\s+(\d)/g, "$1$2");
        console.log(processedText);

        const meet = processedText.match(/Meeting ID:\s*(\S+)/)[1];
        const pass = processedText.match(/Password:\s*(\S+)/)[1];

        const rclink = `https://rc.jiomeetpro.jio.com/shortener?meetingId=${meet}&pwd=${pass}`;
        const link = `https://jiomeetpro.jio.com/shortener?meetingId=${meet}&pwd=${pass}`;

        setText(link);
        setRcText(rclink);
        setMeet(meet);
        setPass(pass);
        showInfo(true);
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
        <button
          onClick={() => {
            navigator.clipboard.writeText(text);
          }}
        ></button>

        <p className="text-[#b8c1ec] text-lg text-center hover:font-bold">
          {" "}
          <a href={rcText}>{rcText} </a>
        </p>
        {info ? <MeetInfo mId={meet} pass={pass} /> : <React.Fragment />}
        <button
          onClick={() => {
            navigator.clipboard.writeText(rcText);
          }}
        ></button>
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
