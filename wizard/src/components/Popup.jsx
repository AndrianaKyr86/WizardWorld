import React from "react";
import "./Popup.css";
import EndLine from "./EndLine";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup_inner">
        {props.children}
        <br />
        <button className="close" onClick={() => props.setTrigger(false)}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
  <br />;
  <br />;
  <EndLine />;
}
export default Popup;
