import React, { Component } from "react";
import { Line } from "rc-progress";
import "./StudentInfo.css";
class StudentInfo extends Component {
  
  render() {
    
    
    return (
      <div className="StudentInfo">
        <div className="right">
          <p className="name">{this.props.name}</p>
          <p className="percent">
            {Math.round(
              this.props.average
            )}
            %
          </p>
        </div>

        <div className="right">
          <p className="subject">Maths</p>

          <Line
            percent={this.props.maths}
            strokeWidth="4"
            trailWidth="4"
            strokeColor="#7174cf"
            trailColor="#d9d9d9"
            style={{ width: 150, height: 8, marginTop: 20 }}
          />
          <p className="subjectpercent">{this.props.maths}%</p>
        </div>
        <div className="right">
          <p className="subject">Science</p>
          <Line
            percent={this.props.science}
            strokeWidth="4"
            trailWidth="4"
            strokeColor="#7174cf"
            trailColor="#d9d9d9"
            style={{ width: 150, height: 8, marginTop: 20 }}
          />
          <p className="subjectpercent">{this.props.science}%</p>
        </div>
        <div className="right">
          <p className="subject">English</p>
          <Line
            percent={this.props.english}
            trailWidth="4"
            strokeWidth="4"
            strokeColor="#7174cf"
            trailColor="#d9d9d9"
            style={{ width: 150, height: 8, marginTop: 20 }}
          />
          <p className="subjectpercent">{this.props.english}%</p>
        </div>
      </div>
    );
  }
}
export default StudentInfo;
