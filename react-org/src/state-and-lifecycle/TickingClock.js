import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// function TickingClock(props) {
//     let element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}. </h2>
//       </div>
//     );
//   }

const TickingClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <>
      <h1>Ticking Clock</h1>
      <h2>Time Ticke {time}</h2>
    </>
  );
};

export default TickingClock;
