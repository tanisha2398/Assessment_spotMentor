import React from "react";
import { NavLink } from "react-router-dom";
import "./ClassRoomListItem.css";
// import MainPanelContent from "../../../MainPanel/MainPanelContent/MainPanelContent";
const ClassRoomListItem = props => (
  <div className="ClassRoomListItem">
    <NavLink
      to={`/${props.classname}`}
      className="classname"
      activeClassName="is-active"
    >
      <p className="classname">{props.classname}</p>
    </NavLink>
  </div>
);
export default ClassRoomListItem;
