import React, { useEffect, useState } from 'react';
import '../../cssss/Background.css';

const Background = () => {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const createSquares = () => {
      const background = document.querySelector(".background");
      const squareSize = 4 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 4em in pixels
      const numColumns = Math.ceil(window.innerWidth / squareSize);
      const numRows = Math.ceil(window.innerHeight / squareSize);
      const squareElements = [];

      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numColumns; col++) {
          const square = document.createElement("div");
          square.classList.add("square");
          square.style.top = `${row * squareSize}px`;
          square.style.left = `${col * squareSize}px`;
          background.appendChild(square);
          squareElements.push(square);
        }
      }
      setSquares(squareElements);
    };

    createSquares();

    const revealRandomSquare = () => {

    
     
      const square = squares[Math.floor(Math.random() * squares.length)];
      if (square) {
        square.classList.add("visible");
        setTimeout(() => {
          square.classList.remove("visible");
        }, 1000);
      }
    };

    const intervalId = setInterval(revealRandomSquare, 500);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="background w-full z-40 h-screen absolute inset-0 flex flex-wrap"></div>;
};

export default Background;
