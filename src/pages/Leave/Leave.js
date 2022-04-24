import React, { useState } from "react";
import  style  from   "./Leave.module.css";
import LeaveBalance from "./LeaveBalance.js";
import NewLeave from "./NewLeave";
import LeaveTabel from "./LeaveTabel";
import LeaveDetails from "./LeaveDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../component/navbar/Navbar";
function Leave({ data ,ondelete}) {
  const [leaveApplication, setLeaveApplication] = useState(false);
  const [leaveApprove, setLeaveApprove] = useState(false);
  const [leaveBalance, setLeaveBalance] = useState(false);
  // const handleClick = (item) => {
  //   setLeaveApplication(item[0]);
  //   setLeaveApprove(item[1]);
  //   setLeaveBalance(item[2]);
  // };
  const leaveApproveHandler = () => {
    setLeaveApprove(true)
    setLeaveApplication(false)
    setLeaveBalance(false)
  }
  const leaveApplicationHandler = () => {
    setLeaveApplication(true)
    setLeaveApprove(false)
    setLeaveBalance(false)
  }
  const leaveBalanceHandler = () => {
    setLeaveBalance(true)
    setLeaveApplication(false)
    setLeaveBalance(false)
  }


  return (
    <>
    
      {/* <div className="container-fluid">
        <div className="row">
        <div className="col-xxl-3 col-lg-3 ">
            <button className="btn-back"><i className="fa fa-bars"></i></button>
          </div>
          <div className="col-xxl-3 col-lg-3 btn ">
            <button onClick={() => handleClick([true, false, false])}>
              New Application
            </button>
          </div> */}
          {/* <div className="col-xxl-3 col-lg-3 btn ">
            <button onClick={() => handleClick([false, true, false])}>
              Leave Approve
            </button>
          </div> */}
          {/* <div className="col-xxl-3 col-lg-3 btn">
            <button onClick={() => handleClick([false, false, true])}>
              Leave Balance
            </button>
          </div>
        </div>
        <div className="row">
          <LeaveTabel sampleData={data} />
        </div> */}

        {/* <div className="row">
          {leaveApplication && <NewLeave />}
          {/* {leaveApprove && <LeaveDetails />} */}
          {/* {leaveBalance && <LeaveBalance />} */}
        {/* </div> */} 
        <Navbar/>
        <div className={`container-fluid ${style.container}`}>
        <div className={`row ${style.row}`}>
          <div className={`col-xl-3 col-lg-3 ${style.btn}`}>
            {" "}
            <button onClick={leaveApproveHandler} >
              Leave Approve
            </button>
          </div>
          <div className={`col-xl-3 col-lg-3 ${style.btn}`}>
            <button onClick={leaveApplicationHandler}>
              Apply Leave
            </button>
          </div>
          <div className={`col-xl-3 col-lg-3 ${style.btn}`}>
            <button onClick={leaveBalanceHandler}>
              Leave Balance
            </button>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "#fcfcfc" }}>
          {leaveApprove &&<LeaveTabel onDelete={ondelete} sampleData={data} />}
          {leaveApplication && <NewLeave />}
          {leaveBalance && <LeaveBalance />}
        
        </div>

      </div>
    </>
  );
}

export default Leave;
