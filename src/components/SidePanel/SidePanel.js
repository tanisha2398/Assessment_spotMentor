import React from "react";
import ClassRooms from "../../classroom_data.json";
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
          {ClassRooms.map((classRoom, index) => {
            return <h4>{classRoom.classname}</h4>;
          })}
        </div>
      </div>
    );
  }
}
