
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';


function Layout() {
  return (
    <>
      <Header />
      <main className="m-0 w-full min-h-screen bg-gray-50" id="wrapper">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
