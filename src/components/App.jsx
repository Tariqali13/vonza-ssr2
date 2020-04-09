import React, { useEffect } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import MarketingSiteRoutes from "../pages/site";
// import { UserWebsiteRoutes } from "../pages/userSite";
import LandingPage from "../pages/site/LandingPage"
// import Loadable from "react-loadable";
// const AsyncLandingPage = Loadable({
//   loader: () =>
//     import(/* webpackChunkName: "myNamedChunk" */ "../pages/site/LandingPage"),
//   loading: () => <div>loading...</div>,
//   modules: ["myLandingPage"],
// });
// import signUpRoutes from "../pages/main/signUpRoutes";
const App = () => {
  // const subDomain = window.localStorage.getItem("sub_domain");

  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      {/* <Route
          path="/"
          render={props => {
            const subdomain = window.location.hostname.split(".");
            if (subdomain && subdomain.length > 2 && !subdomain.includes("www"))
              return <UserWebsiteRoutes {...props} subdomain={subdomain[0]} />;
            return <MarketingSiteRoutes {...props} />;
          }}
        /> */}
    </Switch>
  );
};

export default withRouter(App);
