
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';


function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow m-0 w-full" id="wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
