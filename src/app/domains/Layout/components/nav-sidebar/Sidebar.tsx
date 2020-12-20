import { FC } from 'react';
import { SidebarProps } from './types';
import SidebarContent from './SidebarContent';

const cls = {
  aside: isSidebarOpen =>
    `lg:flex block lg:relative fixed inset-y-0 left-0 z-30 w-48 overflow-y-auto transition duration-300 ease-out transform translate-x-0 lg:translate-x-0 lg:inset-0 shadow-right shadow-md bg-light-mode dark:bg-dark-mode ${
      isSidebarOpen ? 'ease-out translate-x-0' : 'ease-in -translate-x-full'
    } `,
};

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen }) => (
  <aside className={cls.aside(isSidebarOpen)}>
    <SidebarContent />
  </aside>
);

export default Sidebar;
