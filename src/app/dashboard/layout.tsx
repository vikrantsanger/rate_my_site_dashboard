'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { SiteHeader } from '@/components/site-header';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Simple way to generate a title from the path
  const title =
    pathname
      .split('/')
      .filter(Boolean)
      .slice(-1)[0]
      ?.replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase()) || 'Dashboard';

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title={title} />
        <div className="flex flex-1 flex-col overflow-auto">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 px-4 md:gap-6 md:py-6 md:px-6">
              {children}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
