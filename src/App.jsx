import { useState } from 'react'
import './App.css'
import data from "./data.js";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);


  const handleSubmit = () => {

    let amount = parseInt(count);
    if (count === 0) {
      alert("Ayyo ! Please entre input 😵")
    }
    if (count < 0) {
      amount = 1;
      alert(" Ayyo ! you know that you wrote negative input 😵");
    }
    if (count > 8) {
      amount = 8;
      alert(
        " Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀"
      );
    }
    setText(data.slice(0, amount));
  };

  return (
    <div className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>

      <label htmlFor="amount">paragraphs:</label>
      <input type="number" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
      <button className="btn" onClick={handleSubmit}>Generate</button>
      <div className="lorem-text">
        {text.map((item, index) => {
          return <p key={index} className='para'>{item}</p>;
        })}
      </div>
    </div>
  )
}

export default App
