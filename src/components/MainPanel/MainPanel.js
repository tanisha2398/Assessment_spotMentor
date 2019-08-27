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
        <MainPanelContent {...this.props} />
      </div>
    );
  }
}
