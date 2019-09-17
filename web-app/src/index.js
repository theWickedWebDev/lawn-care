import React from "react";
import ReactDOM from "react-dom";
import Router from './router';
import 'antd/dist/antd.css';

class App extends React.Component {
  render() {
    return (<Router/>);
  };
}

ReactDOM.render(<App />, document.querySelector("#root"));
