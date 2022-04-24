import React from "react";
import { useNavigate } from "react-router-dom";
// import LeaveDetails from '../LeaveDetails';
import "./LeaveTable.css";

function LeaveTabel({ sampleData , onDelete }) {
  const navigate = useNavigate();
  const deleteHandler = () => {
    onDelete(sampleData.leaveId);
  };
  return (
    <div className="inner-container">
      <h1>Leave Table</h1>
      <table className="leave-table" border="1">
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>SL No.</th>
            <th style={{ border: "1px solid black" }}>Employee Name</th>
            <th style={{ border: "1px solid black" }}>No of Days Leave</th>
            <th style={{ border: "1px solid black" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((data) => (
            <tr key={data.leaveId}>
              <td style={{ border: "1px solid black" }}>{data.leaveId}</td>
              <td style={{ border: "1px solid black" }}>{data.employeeName}</td>
              <td style={{ border: "1px solid black" }}>{data.leaveDays}</td>
              <td style={{ border: "1px solid black" }}>
                <button
                  onClick={() => {
                    navigate(`/details/${data.leaveId}`);
                  }}
                >
                  View Details
                </button >
                <button  style={{margin:"10px"}} onClick={() =>{onDelete(data.leaveId)}  }>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveTabel;
