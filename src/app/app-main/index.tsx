import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { LayoutContainer } from 'app/domains/Layout/containers/async';

const AppMain = () => (
  <Router>
    <Switch>
      {/* <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
				<Route path="/forgot-password" component={ForgotPassword} /> */}

      <Route path="/" component={LayoutContainer} />
      {/* <Redirect from="/" to="/app" /> */}
    </Switch>
  </Router>
);

export default AppMain;
