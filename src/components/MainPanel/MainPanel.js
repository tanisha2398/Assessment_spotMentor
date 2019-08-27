import React from "react";
import MainPanelContent from "./MainPanelContent/MainPanelContent";
import "./MainPanel.css";

export default class MainPanel extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    console.log(this.props);
    return (
      <div className="mainPanel">
        {this.props.match.path === "/" ? (
          <h1>Class not selected</h1>
        ) : (
          <MainPanelContent {...this.props} />
        )}
      </div>
    );
  }
}
