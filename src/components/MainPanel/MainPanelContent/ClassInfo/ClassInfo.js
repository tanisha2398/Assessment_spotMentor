import React, { Component } from "react";
import AverageClass from "./AverageClass/AverageClass";
import "./ClassInfo.css";
class ClassInfo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      button: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      button: !this.state.button
    });
  }
  render() {
    let classAverage=0;
    this.props.classroom.students.map(student=>(
      classAverage=classAverage+((student.marks.Maths+student.marks.English+student.marks.Science)/3)
    ));
    let classAverageScore=classAverage/this.props.classroom.students.length
    return (
      <div className="border">
        <div className="classInfo">
          <div>
          
          
            <h2>{this.props.classroom.classname}</h2>
            <h4> {this.props.classroom.students.length} Students</h4>
          </div>

          <div>
            <button
              className={this.state.button ? "buttonTrue" : "buttonFalse"}
              onClick={this.handleClick}
            >
              {this.state.button ? <p>Hide Average</p> : <p>Show Average</p>}
            </button>
          </div>
        </div>
        {this.state.button ? <AverageClass score={Math.round(classAverageScore)}/> : null}
      </div>
    );
  }
}
export default ClassInfo;
