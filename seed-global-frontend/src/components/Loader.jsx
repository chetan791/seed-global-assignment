import React from "react";

export const Loader = () => {
  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#f28e43",
        fontSize: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "200vw",
        // backgroundColor: "black",
        // opacity: "0.9",
        zIndex: "4",
      }}
    >
      <h1 style={{ zIndex: "1" }}>Loading...</h1>
    </div>
  );
};
