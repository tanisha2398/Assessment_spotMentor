import React from "react";
// import ClassRooms from "../../classroom_data.json";
import ClassRoomList from "./ClassRoomList/ClassRoomList";
import ClassRoomListItem from "./ClassRoomList/ClassRoomListItem/ClassRoomListItem";
import "./SidePanel.css";

const SidePanel = props => (
  // constructor(props) {
  //   super(props);
  // }

  <div className="SidePanel">
    <h1>Class: XYZ</h1>
    <ClassRoomList {...props} clicked={props.classIsClicked} />
  </div>
);
export default SidePanel;
