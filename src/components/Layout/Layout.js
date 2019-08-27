import React from "react";
import { NavLink } from "react-router-dom";
import MainPanel from "../MainPanel/MainPanel";
import SidePanel from "../SidePanel/SidePanel";
import "./Layout.css";

export default class Layout extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // state = {
  //   classClicked: false
  // };
  // classIsClicked = () => {
  //   this.setState({
  //     classClicked: true
  //   });
  // };
  render() {
    console.log(this.props);
    return (
      <div className="Layout">
        <SidePanel />
        <MainPanel />
      </div>
    );
  }
}
