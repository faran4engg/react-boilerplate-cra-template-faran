import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { LayoutContainer } from 'app/domains/Layout/containers/async';
import './index.css';

const queryClient = new QueryClient();

const AppMain = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Switch>
        {/* <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
				<Route path="/forgot-password" component={ForgotPassword} /> */}

        <Route path="/" component={LayoutContainer} />
        {/* <Redirect from="/" to="/app" /> */}
      </Switch>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default AppMain;
