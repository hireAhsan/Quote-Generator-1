import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const quotes = [
    {
      quote: '"The best way to predict the future is to invent it."',
      author: "– Alan Kay",
    },
    {
      quote: '"Do what you can, with what you have, where you are."',
      author: "– Theodore Roosevelt",
    },
    {
      quote: '"In the middle of every difficulty lies opportunity."',
      author: "–  Albert Einstein",
    },
    {
      quote:
        '"Success is not the key to happiness. Happiness is the key to success."',
      author: "–  Albert Schweitzer",
    },
    {
      quote:
        '"Your time is limited, so don’t waste it living someone else’s life."',
      author: "– Steve Jobs",
    },
  ];

  const [index, setIndex] = useState(0);
  const [quote, setQuote] = useState(
    '"In the middle of every difficulty lies opportunity."'
  );
  const [author, setAuthor] = useState("–  Albert Einstein");

  function randomQuote() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === index);
    setIndex(newIndex);
    setQuote(quotes[index].quote);
    setAuthor(quotes[index].author);
  }

  return (
    <>
      <div className="container">
        <h2 className="quote">{quote}</h2>
        <h5 className="quote-author">{author}</h5>
        <button onClick={randomQuote}>Generator Quote</button>
      </div>
    </>
  );
};

export default App;
