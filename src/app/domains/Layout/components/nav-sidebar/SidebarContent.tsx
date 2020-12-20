import { FC } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { HomeIcon } from 'assets/icons';
import routes from 'app/router/sidebar';

const SidebarContent: FC = () => (
  <div className="py-4 text-gray-500 dark:text-gray-200">
    <a className="ml-6 text-lg font-bold" href="/">
      Brand Logo
    </a>
    <ul className="mt-6 text-theme-color-light dark:text-theme-color-dark">
      {routes.map(route => (
        <li className="relative px-6 py-3" key={route.name}>
          <NavLink
            exact
            to={route.path}
            className="inline-flex items-center w-full text-sm font-semibold transition-colors
						 duration-150"
          >
            <Route path={route.path} exact={route.exact}>
              <span
                className="absolute inset-y-0 left-0 w-1 bg-theme-color-light dark:bg-theme-color-dark rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              />
            </Route>
            <HomeIcon className="w-5 h-5" aria-hidden="true" />
            <span className="ml-4">{route.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarContent;
