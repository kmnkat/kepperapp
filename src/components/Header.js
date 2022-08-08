import React from "react";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";

function Header() {
  return (
    <header className="header">
      <CreateRoundedIcon className="header__icon" />
      <h1 className="header__title">Keeper</h1>
    </header>
  );
}

export default Header;
