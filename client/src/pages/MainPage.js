import React, { useEffect, useState } from "react";
import { fetchGreenBalls } from "../http/index";

const MainPage = () => {
  const [greenBallsPositions, setGreenBallsPositions] = useState([]);

  function refresh() {
    fetchGreenBalls().then((data) => {
      const arr = []
      for (let i = 0; i < data.length; i++) {
        arr.push({id: data[i]["id"], left: `${i % 10}vw`, top: `${Math.floor(i / 10)}vh`});
      }
      setGreenBallsPositions(arr);
    });
    setTimeout(refresh, 500);
  }

  refresh();

  return (
    <>
      {greenBallsPositions.map((greenBall) => (
        <div
          key={greenBall.id}
          style={{
            position: "absolute",
            left: greenBall.left,
            top: greenBall.top,
            width: "100px",
            height: "100px",
            borderRadius: "50px",
          }}>
        </div>
      ))}
    </>
  );
};

export default MainPage;
