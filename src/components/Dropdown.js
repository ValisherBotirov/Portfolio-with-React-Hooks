import React, { useState, useEffect, useRef } from "react";

const Dropdown = (props) => {
  const [selection, setSelection] = useState(props.data[0]);
  const [check, setCheck] = useState(true);

  useEffect(() => {
    props.getData(selection);
  }, [selection]);

  const renderData = () => {
    return props.data.map((val) => {
      if (val.value === selection.value) {
        return;
      }
      return (
        <div
          onClick={() => setSelection(val)}
          className="item"
          data-value="jenny"
          key={val.value}
        >
          {val.label}
        </div>
      );
    });
  };

  document.querySelector("body").addEventListener("click", (e) => {
    if (e.target == ref.current) {
      return;
    }
  });

  const ref = useRef();
  // console.log(ref.current);

  return (
    <div className="ui container">
      <h2>Dropdown</h2>
      <div
        ref={ref}
        onClick={() => setCheck(!check)}
        className={`ui fluid selection dropdown ${
          check ? "active visible" : " "
        }`}
      >
        <input type="hidden" name="user" />
        <i className="dropdown icon"></i>
        <div className="default text">{selection.label}</div>
        <div className={`menu ${check ? "transition visible" : ""} `}>
          {renderData()}
        </div>
      </div>
      {/* <h1 style={{ color: `${selection.value}`, marginTop: "100px" }}>
          Hello World
        </h1> */}
    </div>
  );
};

export default Dropdown;
