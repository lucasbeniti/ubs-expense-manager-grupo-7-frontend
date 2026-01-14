'use client'

import * as React from 'react'
import {
  Bell,
  Building2,
  ChartBarIcon,
  ChartBarStacked,
  Command,
  FileSearch,
  Receipt,
  Users,
} from 'lucide-react'

import { NavItems } from '@/components/shared/nav-items'
import { NavUser } from '@/components/shared/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useAuthContext } from '@/contexts/auth-context'

const ALL_ITEMS = [
  {
    name: 'Funcionários',
    url: '/employees',
    icon: Users,
    roles: ['MANAGER'],
  },
  {
    name: 'Departamentos',
    url: '/departments',
    icon: Building2,
    roles: ['MANAGER'],
  },
  {
    name: 'Categorias',
    url: '/categories',
    icon: ChartBarStacked,
    roles: ['MANAGER'],
  },
  {
    name: 'Despesas',
    url: '/expenses',
    icon: Receipt,
    roles: ['MANAGER', 'FINANCE', 'EMPLOYEE'],
  },
  {
    name: 'Alertas',
    url: '/alerts',
    icon: Bell,
    roles: ['FINANCE'],
  },
  {
    name: 'Auditoria de Despesas',
    url: '/expense-logs',
    icon: FileSearch,
    roles: ['FINANCE'],
  },
  {
    name: 'Relatórios',
    url: '/reports',
    icon: ChartBarIcon,
    roles: ['FINANCE'],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuthContext()

  const filteredItems = React.useMemo(() => {
    if (!user) return []
    return ALL_ITEMS.filter((item) => item.roles.includes(user.role))
  }, [user])

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
                  <span className="truncate font-medium">UBS Hermes</span>
                  <span className="truncate text-xs">Expense Manager</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavItems items={filteredItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
