
import { useState} from 'react';
import Tesseract from 'tesseract.js';
import './App.css';
 
function App() {
  const [imagePath, setImagePath] = useState("");
  const [text, setText] = useState("");
 
  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  }
  var jmLink = `https://jiomeetpro.jio.com/shortener?meetingId={}&pwd={}`
 
  const handleClick = () => {
  
    Tesseract.recognize(
      imagePath,'eng',
      { 
        logger: m => console.log(m) 
      }
    )
    .catch (err => {
      console.error(err);
    })
    .then(result => {
      // Get Confidence score
      let confidence = result.confidence
      console.log(confidence);

      let text = result.data.text;

      console.log(result.data.text)
      const inputString = result.data.text;
      const meetingID = inputString.substring(12, 24).replace(/ /g,'')

// Use a regular expression to extract the meeting ID and password


// Extract the meeting ID and password from the match object

const password =inputString.substring(35,42).trim().replace(/[()]/g, "J")

// Print the extracted values
console.log(`Meeting ID: ${meetingID}`);
console.log(`Password: ${password}`);

      const link = `https://jiomeetpro.jio.com/shortener?meetingId=${meetingID}&pwd=${password}`;

      console.log(link);
      navigator.clipboard.writeText(link)
      setText(link);
  
    })
  }
 
  return (
    <div className="App h-[100vh]">
      <main className="flex-col">
        <h3 className='text-white text-3xl'>Image</h3>
        {imagePath && <img src={imagePath} className="mx-auto mt-4" alt="logo" />}

        
          <h3 >Extracted text</h3>
        <div className="text-box">
          <p> {text} </p>
          <a href={text} target="_blank"> {text}</a>
        </div>
        
        <input type="file" onChange={handleChange} />
        <button onClick={handleClick} style={{height:50}}> convert to text</button>
      </main>
    </div>
  );
}
 
export default App
