"use client"

import { BarChart3, Box, Calendar, DollarSign, Factory, Home, Package, Truck, Users, Warehouse } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Raw Materials",
    url: "/raw-materials",
    icon: Warehouse,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Finished Goods",
    url: "/finished-goods",
    icon: Package,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Dispatch Log",
    url: "/dispatch",
    icon: Truck,
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "Attendance",
    url: "/attendance",
    icon: Calendar,
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    title: "Payroll",
    url: "/payroll",
    icon: DollarSign,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Product Master",
    url: "/products",
    icon: Box,
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Expenses",
    url: "/expenses",
    icon: BarChart3,
    gradient: "from-red-500 to-rose-600",
  },
  {
    title: "Staff Directory",
    url: "/staff",
    icon: Users,
    gradient: "from-teal-500 to-emerald-600",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r-0">
      <div className="h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 shadow-2xl">
        <SidebarHeader className="border-b border-white/20 bg-black/20">
          <div className="flex items-center gap-3 px-4 py-6">
            <div className="relative">
              <Factory className="h-10 w-10 text-white animate-float drop-shadow-lg" />
              <div className="absolute inset-0 h-10 w-10 bg-violet-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white drop-shadow-lg">DBRL ERP</h2>
              <p className="text-xs text-violet-200 font-semibold">Management System</p>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent className="px-3 py-4 bg-black/10">
          <SidebarGroup>
            <SidebarGroupLabel className="text-violet-200 text-xs uppercase tracking-wider mb-4 font-bold">
              Main Menu
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.url
                  return (
                    <SidebarMenuItem
                      key={item.title}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <SidebarMenuButton asChild className="group">
                        <Link
                          href={item.url}
                          className={`
                            relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 overflow-hidden
                            ${
                              isActive
                                ? "bg-white/25 text-white shadow-lg border border-white/30"
                                : "text-slate-200 hover:bg-white/15 hover:text-white border border-transparent"
                            }
                          `}
                        >
                          <div
                            className={`
                            relative z-10 p-2 rounded-lg bg-gradient-to-r ${item.gradient} 
                            ${isActive ? "animate-pulse-glow shadow-lg" : "group-hover:scale-110 shadow-md"} 
                            transition-transform duration-300
                          `}
                          >
                            <item.icon className="h-4 w-4 text-white" />
                          </div>
                          <span className="relative z-10 font-semibold text-white">{item.title}</span>
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-xl"></div>
                          )}
                          <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-violet-400 to-purple-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full"></div>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-white/20 p-4 bg-black/20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/15 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-white font-semibold">System Online</span>
            </div>
            <p className="text-xs text-slate-300 mt-2 font-medium">© 2024 DBRL Internal System</p>
          </div>
        </SidebarFooter>
      </div>
    </Sidebar>
  )
}
