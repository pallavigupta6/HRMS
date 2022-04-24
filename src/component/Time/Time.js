
import React, { useState } from "react";
import { useEffect } from "react";
import style from './Time.module.css';

const Time = () => {
  const [inTime, setInTime] = useState();
  const [outTime, setOutTime] = useState();
  const [cTime, setCTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => setCTime(new Date().toLocaleTimeString()), 1000);
  },[]);
  return (
  <div className={style.container}>
      <div className={style.row}>
        <h5 style={{ textAlign: "center", fontSize: "3em", margin: "4px" ,fontFamily:'arial'}}>
          Mark-Attendence
        </h5>
        <h5 style={{ textAlign: "center", fontSize: "3em", margin: "5px" }}>
          {cTime}
        </h5>
      </div>
      {inTime !== undefined && (
        <h2 style={{ textAlign: "center", fontSize: "5em", margin: "5px" }}>
          {inTime}
        </h2>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ padding: "5px 10px", marginBottom: "10px", width: "100px",background:"green",color:"white",borderRadius:'20px' }}
          onClick={() => setInTime(new Date().toLocaleTimeString())}
        >
          Time-In
        </button>
      </div>
      {outTime !== undefined && (
        <h2 style={{ textAlign: "center", fontSize: "5em", margin: "5px"}}>
          {outTime}
        </h2>
      )}
      {inTime !== undefined && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{ padding: "5px 10px", width: "100px",background:"blue" ,color:"white",borderRadius:'20px' }}
            onClick={() => setOutTime(new Date().toLocaleTimeString())}
          >
            Time-Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Time;
