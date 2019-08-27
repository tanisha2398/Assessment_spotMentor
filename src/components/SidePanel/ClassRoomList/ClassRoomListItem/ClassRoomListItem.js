import React from "react";
import { NavLink } from "react-router-dom";
// import MainPanelContent from "../../../MainPanel/MainPanelContent/MainPanelContent";
const ClassRoomListItem = props => (
  <div>
    <h4>
      <NavLink to={`/${props.classname}`} activeClassName="is-active">
        {props.classname}
      </NavLink>
    </h4>
  </div>
);
export default ClassRoomListItem;
