"use client";

import AppSidebar from "@/components/atoms/a-app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

interface Props {
  children?: React.ReactNode;
  variant?: "app" | "admin";
}

const AppLayout: React.FC<Props> = ({ children, variant }) => {
  return (
    <SidebarProvider>
      <AppSidebar variant={variant} />
      <SidebarInset>
        <div>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
