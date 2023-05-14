import React from "react";
import "./Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup_inner">
        {props.children}
        <br />
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Popup;
