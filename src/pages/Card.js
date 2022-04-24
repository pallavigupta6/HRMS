import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        height: "200px",
        width: "24%",
        margin: "20px 30px",
        border: "1px ridge",
        padding: "15px",
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "20%" }}>Balance</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{props.type}</div>
        <div>{props.leaveCount}</div>
      </div>
    </div>
  );
};

export default Card;
