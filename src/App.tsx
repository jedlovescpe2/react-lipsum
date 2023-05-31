import "./index.css";

import data from "./data";
import { useState } from "react";
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let amount = count
    setText(data.slice(0,amount))
  };
  return (
    <div className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          min="1"
          step="1"
          max="8"
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item)=>{
          const id = nanoid();
          return ( <p key={id}>{item}</p>)
        })}
      </article>
    </div>
  );
};
export default App;
