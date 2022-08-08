import React from "react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <p>
        Keeper {year}. Coded by <a href="https://github.com/kmnkat">kmnkat</a>
      </p>
    </footer>
  );
}

export default Footer;
