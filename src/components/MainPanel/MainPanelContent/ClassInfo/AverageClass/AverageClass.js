import React from "react";
import "./AverageClass.css";
const AverageClass = (props) => (
  <div className="AverageClass">
    <p>Classroom Average Performance: {props.score}% </p>
  </div>
);
export default AverageClass;
