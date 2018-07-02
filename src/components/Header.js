import React from "react";


function Header(props) {
  return (
    <div className="header">
      <h1 className="restName">{props.name}</h1>
    </div>
  );
}

export default Header;
