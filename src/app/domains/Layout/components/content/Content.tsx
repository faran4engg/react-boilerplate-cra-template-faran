import { FC } from 'react';
import { ContentProps } from './types';

const Content: FC<ContentProps> = ({ children }) => (
  <main className="h-full overflow-y-auto my-3">
    <div className="container grid px-4 lg:px-6 mx-auto">{children}</div>
  </main>
);

export default Content;
