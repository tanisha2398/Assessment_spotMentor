import React from "react";
import { connect } from "react-redux";
import { showClass } from "../../../actions/classroom";
import ClassInfo from "./ClassInfo/ClassInfo";
const MainPanelContent = props => (
  <div>
    <ClassInfo classroom={props.classroom}/>
    <h1>Will see " {props.match.params.id} " classname</h1>
    <h1>{props.classroom.classname}</h1>
    {props.classroom.students.map(student => {
      return <h2>{student.name}</h2>;
    })}

  </div>
);
// export default MainPanelContent;
const mapStateToProps = (state, props) => {
  return {
    classroom: state.classrooms.find(classroom => {
      return classroom.classname === props.match.params.id;
    })
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return { showClass: () => dispatch(showClass()) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPanelContent);
