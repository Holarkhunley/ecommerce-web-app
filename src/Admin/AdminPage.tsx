import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/components/ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import NotificationBell from "../Admin/adminPages/NotificationBell";
import { Toaster } from "@/components/components/ui/sonner";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/components/ui/breadcrumb";
import { Separator } from "@/components/components/ui/separator";
import { Link } from "react-router-dom";
export default function AdminPage() {
  // Get the Current Url
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const currentPage = pathParts[pathParts.length - 1]; //last item

  //Break the Url into parts into an array with. .slice() and pick the last one

  return (
    <SidebarProvider>
      {/* Full screen container */}
      <div className="flex h-screen w-screen">
        {/* Sidebar stays on the left */}
        <AppSidebar />

        {/* Main content area takes all remaining space */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Top notification bar */}
          <div className="flex items-center justify-between p-2 border-b">
            {/* Page name */}
            <h1 className="text-lg font-semibold text-black">
              {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
            </h1>

            {/* Notification bell on the right */}
            <NotificationBell />
          </div>
          <div className="flex items-center gap-1 p-2 border-b">
            <Separator
              orientation="vertical"
              className="self-stretch border-gray-300"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    {/*First item: Dashboard link */}
                    <Link
                      to="/admin"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      Dashboard
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {/*Only show seperator if not on dashboard */}
                {currentPage !== "admin" && <BreadcrumbSeparator />}

                {/*Second item: Current page */}
                {currentPage !== "admin" && (
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      {currentPage.charAt(0).toUpperCase() +
                        currentPage.slice(1)}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Page content (Outlet expands fully) */}
          <div className="flex-1 bg-gray-50 overflow-auto p-1">
            <Outlet />
          </div>
        </div>

        {/* Global toaster for notifications */}
        <Toaster position="top-right" richColors />
      </div>
    </SidebarProvider>
  );
}
