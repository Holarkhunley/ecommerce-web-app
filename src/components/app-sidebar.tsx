"use client";

import * as React from "react";
import {
  SquareTerminal,
  Bot,
  BookOpen,
  Settings2,
  Frame,
  PieChart,
  GalleryVerticalEnd,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { NavProjects } from "./nav-projects";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/components/ui/sidebar";
//import { useNavigate } from "react-router-dom";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [collapsed, setCollapsed] = React.useState(false);
  // const navigate = useNavigate();

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/admin",
        icon: SquareTerminal,
        //onClick: () => navigate("/admin", { replace: true }) // ✅ forces Dashboard to render
      },
      { title: "Orders", url: "/admin/orders", icon: Bot },
      { title: "Products", url: "/admin/product", icon: BookOpen },
      { title: "Customers", url: "/admin/customer", icon: BookOpen },
      { title: "Suppliers", url: "/admin/suppliers", icon: BookOpen },
      { title: "Inventory", url: "/admin/inventory", icon: Settings2 },
      { title: "Transaction", url: "/admin/transactions", icon: Frame },
      { title: "Traffic&Conversion", url: "/admin/traffic&conversion", icon: PieChart },
      
    ],
    projects: [
      {
        name: "Manage Users",
        url: "/admin/manageuser",
        icon: Frame,
      },
      {
        name: "Settings",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Notifications",
        url: "/admin/notifications",
        icon: PieChart,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarTrigger onClick={() => setCollapsed((prev) => !prev)} />
      <SidebarHeader>
        <div className="flex ml-1 gap-2">
          <GalleryVerticalEnd className="h-6 w-6" />
          {!collapsed && <span className="text-lg font-sans first-letter:text-2xl font-extrabold first-letter:text-purple-900">SHOPFLIX</span>}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
         <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
