import React, { useState } from "react";

const DropdownUzimcha = (props) => {
  const [select, setSelect] = useState(props.data[0]);
  const [check, setCheck] = useState(true);
  const renderItem = () => {
    return props.data.map(function (item) {
      return (
        <div
          onClick={() => setSelect(item)}
          className="item"
          data-value="jenny"
          key={item.value}
        >
          {item.label}
        </div>
      );
    });
  };

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <div
        className={`ui fluid selection dropdown   ${
          check ? "active visible" : " "
        }`}
      >
        <input type="hidden" name="user" />
        <i className="dropdown icon"></i>
        <div className="default text">{select.label}</div>
        <div className={`menu ${check ? "transition visible" : ""}`}>
          {renderItem()}
        </div>
      </div>
      <h2 style={{ marginTop: "160px" }}>Valisher Botirov</h2>
    </div>
  );
};

export default DropdownUzimcha;
