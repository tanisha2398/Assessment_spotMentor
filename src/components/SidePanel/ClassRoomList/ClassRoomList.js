import React from "react";
import "./ClassRoomList.css";
import ClassRoomListItem from "./ClassRoomListItem/ClassRoomListItem";
import { connect } from "react-redux";
const ClassRoomList = props => (
  <div className="ClassRoomList">
    {props.classrooms.map(classroom => (
      <ClassRoomListItem
        key={classroom.classname}
        id={classroom.classname}
        {...classroom}
        clicked={props.clicked}
      />
    ))}
  </div>
);
const mapStateToProps = state => {
  return {
    classrooms: state.classrooms
  };
};
export default connect(mapStateToProps)(ClassRoomList);
