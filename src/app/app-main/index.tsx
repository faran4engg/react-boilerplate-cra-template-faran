import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { HomePage } from 'app/containers/HomePage/Loadable';

const AppMain = () => {
  return (
    <BrowserRouter>
      <Helmet defaultTitle="React Boilerplate" htmlAttributes={{ lang: 'en' }}>
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <p className="text-4xl text-purple-500">lol</p>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default AppMain;
