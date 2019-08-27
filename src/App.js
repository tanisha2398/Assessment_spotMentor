import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import data from "./classroom_data.json";

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    console.log({ data }); // Use this data to render this page
    return (
      <div>
        <Header />
      </div>
    );
  }
}
