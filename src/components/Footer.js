import React from "react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div>
      <p>{year}</p>
    </div>
  );
}

export default Footer;
