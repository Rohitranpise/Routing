import React from "react";

function Footer() {
  return (
    <>
      <div
        style={{ backgroundColor: "wheat", marginTop: 40, marginBottom: 80 }}
      >
        <h4 style={{ marginLeft: 70, marginBottom: 30 }}>RestApp</h4>
        <div
          style={{
            marginLeft: 70,
            marginRight: 100,
            marginTop: 8,
            fontSize: 18,
          }}
        >
          For over a decade now, we’ve been empowering our customers in
          discovering new tastes and experiences across countries. By putting
          together meticulous information for our customers, we enable them to
          make an informed choice.
        </div>
        <span style={{ marginLeft: 70, marginTop: 50 }}>contact Us: </span>
        <span>rest@food345.com</span>
      </div>
    </>
  );
}

export default Footer;
