import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import 'assets/css/tailwind.css';

import * as serviceWorker from 'serviceWorker';

import { HelmetProvider } from 'react-helmet-async';

import AppMain from 'app/app-main';
import SuspenseLoader from 'app/domains/Common/components/loader/suspense-loader/SuspenseLoader';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <HelmetProvider>
    <React.StrictMode>
      <Suspense fallback={<SuspenseLoader />}>
        <AppMain />
      </Suspense>
    </React.StrictMode>
  </HelmetProvider>,
  MOUNT_NODE,
);

serviceWorker.unregister();
