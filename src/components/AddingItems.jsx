import React, { useState } from "react";

function List(props) {
  const [onClick, setOnClick] = useState(false)

  function handleClick(){
    setOnClick((prevValue => {return !prevValue}));
  }

  return <li onClick={handleClick} style={{textDecoration: onClick ? "line-through" : "none"}}>{props.element}</li>;
}

export default List;
