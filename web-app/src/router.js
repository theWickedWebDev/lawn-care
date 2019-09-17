// @flow
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from './components/loading';
import StandardLayout from './layouts/standard';

const NavBar = Loadable({
  loader: () => import(/* webpackChunkName: "navbar" */ "./components/navbar"),
  loading: Loading,
});

const Footer = Loadable({
  loader: () => import(/* webpackChunkName: "navbar" */ "./components/footer"),
  loading: Loading,
});

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ "./pages/homepage"),
  loading: Loading,
});

const AboutPage = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ "./pages/about"),
  loading: Loading,
});

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <StandardLayout
          header={<NavBar/>}
          footer={<Footer/>}
        >
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about/" component={AboutPage} />
        </StandardLayout>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
