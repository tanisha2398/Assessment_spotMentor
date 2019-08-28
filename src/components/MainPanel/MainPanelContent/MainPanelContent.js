import React from "react";
import { connect } from "react-redux";
import { showClass } from "../../../actions/classroom";
import ClassInfo from "./ClassInfo/ClassInfo";
import StudentInfo from "./StudentInfo/StudentInfo";
import getAverage from "../../../selectors/classroom";
import { Line } from "rc-progress";
import "./MainPanelContent.css";
const MainPanelContent = (props,{classroom}) => {
  // const average = getAverage(students);

  
  return (
    <div>
      
      <ClassInfo classroom={props.classroom} />
      <div className="students">
        <div className="students-group">
          {props.classroom.students.length === 0 ? (
            <h1>No Student in this class</h1>
          ) : (
            props.classroom.students.map(student => {
              
              return (
                <StudentInfo
                  key={student.name}
                  name={student.name}
                  maths={student.marks.Maths}
                  english={student.marks.English}
                  science={student.marks.Science}
                  average={(student.marks.Maths+student.marks.English+student.marks.Science)/3}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
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
