import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as serviceWorker from 'serviceWorker';

// Import root app
import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

// Initialize languages
import './locales/i18n';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>,
  MOUNT_NODE,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
