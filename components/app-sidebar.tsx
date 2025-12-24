'use client'

import * as React from 'react'
import { Bell, Building2, ChartBarStacked, Command, FileSearch, Receipt, Users } from 'lucide-react'

import { NavItems } from '@/components/nav-items'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  projects: [
    {
      name: 'Usuários',
      url: '/users',
      icon: Users,
    },
    {
      name: 'Departamentos',
      url: '/departments',
      icon: Building2,
    },
    {
      name: 'Categorias',
      url: '/categories',
      icon: ChartBarStacked,
    },
    {
      name: 'Despesas',
      url: '/expenses',
      icon: Receipt,
    },
    {
      name: 'Alertas',
      url: '/alerts',
      icon: Bell,
    },
    {
      name: 'Auditoria de Despesas',
      url: '/expense-audit-logs',
      icon: FileSearch,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">UBS</span>
                  <span className="truncate text-xs">Expense Manager</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavItems projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
