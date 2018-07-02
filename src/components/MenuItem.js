import React from "react";

function MenuItem(props) {
  const { item, title } = props; //!!! {item, etc...} within fn avoids the need for "props" on this line
  return (
    <div className="menuItemFood">
      <h1>{title}</h1>
      {item.map(function(element) {
        return (
          <p key={element.name}>
            {element.name} {element.price}
            <button 
              className="menuItemFood__button"
              onClick={props.clickHandler} 
              name={element.name}
              value={element.price}
            >
              Select
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default MenuItem;
