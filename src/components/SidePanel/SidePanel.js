import React from "react";

import "./SidePanel.css";

export default class SidePanel extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="SidePanel">
        <h1>School: XYZ</h1>
        <div>
          <h4>Class 1</h4>
          <h4>Class 2</h4>
        </div>
      </div>
    );
  }
}
