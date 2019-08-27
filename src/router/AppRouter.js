import React from "react";
import Layout from "../components/Layout/Layout";
import ClassRoomListItem from "../components/SidePanel/ClassRoomList/ClassRoomListItem/ClassRoomListItem";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "../components/Header/Header";

import MainPanel from "../components/MainPanel/MainPanel";

const NotFound = () => (
  <div>
    404 eRROR
    <Link to="/">Go Home</Link>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Layout} exact={true} />
        <Route path={`/:id`} component={Layout} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
