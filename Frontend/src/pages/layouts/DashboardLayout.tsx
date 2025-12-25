import React from 'react'
import { SidebarInset, SidebarProvider } from '../../components/ui/sidebar'
import { AppSidebar } from '../../components/app-sidebar'
import { SiteHeader } from '../../components/site-header'

interface DashboardLayoutProps
{
    children: React.ReactNode
}

const DashboardLayout = ({children}: DashboardLayoutProps) => {
  return (
     <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col bg-[#ECF0F1]">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 p-4 md:gap-6 md:py-6">
              {children}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
