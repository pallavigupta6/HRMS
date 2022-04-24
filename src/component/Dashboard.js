import React from "react";
import Navbar from "./navbar/Navbar";
// import Time from "./Time/Time";
import style from './Dashboard.module.css';
function Dashboard() {
  return (
    <div className={style.container}>
      <Navbar />
      {/* <Time/> */}
    </div>
  );
}
export default Dashboard;
