import React from "react";
import InputContext from "./inputContext";

const InputState = (props) => {
  const [item, setItem] = React.useState([]);

  return (
    <InputContext.Provider value={{ item, setItem }}>
      {props.children}
    </InputContext.Provider>
  );
};

export default InputState;
