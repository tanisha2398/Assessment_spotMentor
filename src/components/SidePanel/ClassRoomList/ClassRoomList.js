import React from "react";
import "./ClassRoomList.css";
import ClassRoomListItem from "./ClassRoomListItem/ClassRoomListItem";
import { connect } from "react-redux";
const ClassRoomList = props => (
  <div className="ClassRoomList">
    <h4>
      {props.classrooms.map(classroom => (
        <ClassRoomListItem
          key={classroom.classname}
          id={classroom.classname}
          {...classroom}
          clicked={props.clicked}
        />
      ))}
    </h4>
  </div>
);
const mapStateToProps = state => {
  return {
    classrooms: state.classrooms
  };
};
export default connect(mapStateToProps)(ClassRoomList);
