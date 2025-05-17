
import Header from './header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      {/* Render nested route content */}
      <Outlet />
    </>
  );
}

export default Layout;
