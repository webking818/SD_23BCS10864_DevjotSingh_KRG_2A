"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  AlertTriangle,
  Package,
  Truck,
  Users,
  TrendingUp,
  Calendar,
  DollarSign,
  Factory,
  Sparkles,
  Zap,
  Target,
  Clock,
  CheckCircle,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function Dashboard() {
  // Mock data for demonstration
  const todayStats = {
    attendance: { present: 45, total: 50 },
    dispatches: 23,
    production: 150,
    revenue: 45000,
  }

  const stockAlerts = [
    { item: "Raw Material A", current: 50, reorder: 100, type: "raw" },
    { item: "Product XYZ", current: 25, reorder: 50, type: "finished" },
    { item: "Packaging Material", current: 75, reorder: 200, type: "raw" },
  ]

  const channelRevenue = [
    { channel: "Amazon", revenue: 18000, orders: 8, color: "from-amber-500 to-orange-500" },
    { channel: "Website", revenue: 12000, orders: 6, color: "from-cyan-500 to-blue-500" },
    { channel: "Flipkart", revenue: 9000, orders: 5, color: "from-violet-500 to-purple-500" },
    { channel: "1MG", revenue: 6000, orders: 4, color: "from-emerald-500 to-teal-500" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Background with Factory Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/95 via-purple-50/95 to-indigo-50/95"></div>
        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='factory-bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:0.1'/%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23factory-bg)'/%3E%3Cg fill='%23667eea' fillOpacity='0.05'%3E%3Crect x='100' y='400' width='200' height='300'/%3E%3Crect x='350' y='350' width='150' height='350'/%3E%3Crect x='550' y='380' width='180' height='320'/%3E%3Crect x='780' y='360' width='160' height='340'/%3E%3Crect x='990' y='390' width='140' height='310'/%3E%3Cpolygon points='100,400 200,350 300,400'/%3E%3Cpolygon points='350,350 425,300 500,350'/%3E%3Cpolygon points='550,380 640,330 730,380'/%3E%3Cpolygon points='780,360 860,310 940,360'/%3E%3Cpolygon points='990,390 1065,340 1130,390'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="absolute inset-0 hero-pattern"></div>
      </div>

      <header className="relative z-10 flex h-20 shrink-0 items-center gap-2 border-b border-white/30 bg-white/90 backdrop-blur-sm px-6 shadow-sm">
        <SidebarTrigger className="-ml-1 hover:bg-violet-100 transition-colors duration-200" />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="relative">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <Sparkles className="absolute -top-1 -right-6 h-4 w-4 text-amber-500 animate-pulse" />
            </div>
          </div>
          <p className="text-sm text-slate-700 flex items-center gap-2 font-semibold">
            <span>Welcome to DBRL ERP</span>
            <span className="text-slate-500">•</span>
            <span>{new Date().toLocaleDateString()}</span>
            <div className="flex items-center gap-1 ml-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-emerald-600 font-bold">Live</span>
            </div>
          </p>
        </div>
      </header>

      <main className="relative z-10 flex-1 space-y-8 p-6">
        {/* Today's Key Metrics - Yellow Theme */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl shadow-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Today's Overview
              </h2>
              <p className="text-sm text-slate-700 font-semibold">
                Real-time metrics for {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 stagger-animation">
            {/* Today's Attendance - Yellow Theme */}
            <Card className="card-hover border-0 bg-gradient-to-br from-yellow-400 to-amber-500 text-white overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 bg-black/10"></div>
              <div
                className="absolute inset-0 opacity-5 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='20' cy='20' r='8'/%3E%3Ccircle cx='50' cy='20' r='8'/%3E%3Ccircle cx='80' cy='20' r='8'/%3E%3Ccircle cx='20' cy='50' r='8'/%3E%3Ccircle cx='50' cy='50' r='8'/%3E%3Ccircle cx='80' cy='50' r='8'/%3E%3Ccircle cx='20' cy='80' r='8'/%3E%3Ccircle cx='50' cy='80' r='8'/%3E%3Ccircle cx='80' cy='80' r='8'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-bold text-white">Today's Attendance</CardTitle>
                <div className="p-2 bg-white/20 rounded-lg animate-pulse">
                  <Users className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold mb-2 text-white">
                  {todayStats.attendance.present}/{todayStats.attendance.total}
                </div>
                <Progress
                  value={(todayStats.attendance.present / todayStats.attendance.total) * 100}
                  className="mb-2 bg-white/20"
                />
                <p className="text-xs text-white font-semibold flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  {((todayStats.attendance.present / todayStats.attendance.total) * 100).toFixed(1)}% present
                </p>
              </CardContent>
            </Card>

            {/* Today's Dispatches - Yellow Theme */}
            <Card className="card-hover border-0 bg-gradient-to-br from-yellow-500 to-orange-500 text-white overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 bg-black/10"></div>
              <div
                className="absolute inset-0 opacity-5 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Crect x='10' y='40' width='30' height='20' rx='2'/%3E%3Crect x='45' y='35' width='35' height='30' rx='3'/%3E%3Ccircle cx='20' cy='70' r='5'/%3E%3Ccircle cx='35' cy='70' r='5'/%3E%3Ccircle cx='55' cy='70' r='5'/%3E%3Ccircle cx='70' cy='70' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-bold text-white">Today's Dispatches</CardTitle>
                <div className="p-2 bg-white/20 rounded-lg animate-pulse">
                  <Truck className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold text-white">{todayStats.dispatches}</div>
                <p className="text-xs text-white font-semibold flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3" />
                  Orders shipped today
                </p>
              </CardContent>
            </Card>

            {/* Today's Production - Yellow Theme */}
            <Card className="card-hover border-0 bg-gradient-to-br from-amber-500 to-yellow-600 text-white overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 bg-black/10"></div>
              <div
                className="absolute inset-0 opacity-5 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Crect x='20' y='30' width='15' height='40'/%3E%3Crect x='40' y='25' width='15' height='45'/%3E%3Crect x='60' y='35' width='15' height='35'/%3E%3Cpolygon points='20,30 27.5,20 35,30'/%3E%3Cpolygon points='40,25 47.5,15 55,25'/%3E%3Cpolygon points='60,35 67.5,25 75,35'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-bold text-white">Production Today</CardTitle>
                <div className="p-2 bg-white/20 rounded-lg animate-pulse">
                  <Factory className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold text-white">{todayStats.production}</div>
                <p className="text-xs text-white font-semibold flex items-center gap-1 mt-1">
                  <Target className="h-3 w-3" />
                  Units manufactured
                </p>
              </CardContent>
            </Card>

            {/* Today's Revenue - Yellow Theme */}
            <Card className="card-hover border-0 bg-gradient-to-br from-orange-500 to-amber-600 text-white overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 bg-black/10"></div>
              <div
                className="absolute inset-0 opacity-5 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3Ctext x='50' y='55' textAnchor='middle' fontSize='16' fontWeight='bold'%3E₹%3C/text%3E%3Cpath d='M30 30 L70 30 L65 25 L70 30 L65 35' stroke='%23ffffff' strokeWidth='2' fill='none'/%3E%3Cpath d='M70 70 L30 70 L35 75 L30 70 L35 65' stroke='%23ffffff' strokeWidth='2' fill='none'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-bold text-white">Today's Revenue</CardTitle>
                <div className="p-2 bg-white/20 rounded-lg animate-pulse">
                  <DollarSign className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold text-white">₹{todayStats.revenue.toLocaleString()}</div>
                <p className="text-xs text-white font-semibold flex items-center gap-1 mt-1">
                  <Zap className="h-3 w-3" />
                  +12% from yesterday
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Stock Alerts */}
          <Card className="card-hover border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 opacity-3 bg-cover bg-center"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='%23f43f5e' fillOpacity='0.1'%3E%3Crect x='20' y='60' width='30' height='80'/%3E%3Crect x='60' y='40' width='30' height='100'/%3E%3Crect x='100' y='70' width='30' height='70'/%3E%3Crect x='140' y='50' width='30' height='90'/%3E%3Cpolygon points='20,60 35,40 50,60'/%3E%3Cpolygon points='60,40 75,20 90,40'/%3E%3Cpolygon points='100,70 115,50 130,70'/%3E%3Cpolygon points='140,50 155,30 170,50'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-rose-500 to-red-500 rounded-lg shadow-md">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent font-bold">
                  Stock Alerts
                </span>
              </CardTitle>
              <CardDescription className="text-sm text-slate-700 font-semibold">
                Items below reorder level
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              {stockAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-rose-200 rounded-xl bg-gradient-to-r from-rose-50 to-red-50 card-hover shadow-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>
                    <p className="font-bold text-slate-900">{alert.item}</p>
                    <p className="text-sm text-slate-700 font-medium">
                      Current: <span className="font-bold text-slate-900">{alert.current}</span> | Reorder:{" "}
                      <span className="font-bold text-slate-900">{alert.reorder}</span>
                    </p>
                  </div>
                  <Badge
                    variant={alert.current < alert.reorder ? "destructive" : "secondary"}
                    className="animate-pulse font-semibold"
                  >
                    {alert.type === "raw" ? "Raw Material" : "Finished Good"}
                  </Badge>
                </div>
              ))}
              <Button className="w-full bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 transition-all duration-300 shadow-lg text-white font-bold">
                View All Stock Levels
              </Button>
            </CardContent>
          </Card>

          {/* Channel Revenue */}
          <Card className="card-hover border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 opacity-3 bg-cover bg-center"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='%238b5cf6' fillOpacity='0.1'%3E%3Cpath d='M20 180 Q50 120 80 140 T140 120 T200 160' stroke='%238b5cf6' strokeWidth='3' fill='none'/%3E%3Ccircle cx='20' cy='180' r='4'/%3E%3Ccircle cx='80' cy='140' r='4'/%3E%3Ccircle cx='140' cy='120' r='4'/%3E%3Ccircle cx='200' cy='160' r='4'/%3E%3Cpath d='M180 40 L190 30 L200 40 L190 50 Z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg shadow-md">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent font-bold">
                  Channel Performance
                </span>
              </CardTitle>
              <CardDescription className="text-sm text-slate-700 font-semibold">
                Revenue breakdown by sales channel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              {channelRevenue.map((channel, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-violet-200 rounded-xl bg-white/70 card-hover overflow-hidden relative shadow-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${channel.color} opacity-5`}></div>
                  <div className="relative z-10">
                    <p className="font-bold text-slate-900">{channel.channel}</p>
                    <p className="text-sm text-slate-700 font-medium">{channel.orders} orders</p>
                  </div>
                  <div className="text-right relative z-10">
                    <p className="font-bold text-lg text-slate-900">₹{channel.revenue.toLocaleString()}</p>
                    <p className="text-xs text-slate-600 font-medium">
                      {((channel.revenue / todayStats.revenue) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              ))}
              <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 transition-all duration-300 shadow-lg text-white font-bold">
                View Detailed Reports
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="card-hover border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 opacity-3 bg-cover bg-center"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Cg fill='%236366f1' fillOpacity='0.1'%3E%3Ccircle cx='100' cy='100' r='30'/%3E%3Ccircle cx='200' cy='100' r='30'/%3E%3Ccircle cx='300' cy='100' r='30'/%3E%3Cpath d='M70 100 L130 100 M170 100 L230 100 M270 100 L330 100' stroke='%236366f1' strokeWidth='2'/%3E%3Cpolygon points='85,85 85,115 115,100'/%3E%3Cpolygon points='185,85 185,115 215,100'/%3E%3Cpolygon points='285,85 285,115 315,100'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg shadow-md">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent font-bold">
                Quick Actions
              </span>
            </CardTitle>
            <CardDescription className="text-sm text-slate-700 font-semibold">
              Frequently used operations
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 stagger-animation">
              <Link href="/raw-materials">
                <Button className="h-24 flex-col gap-3 bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 card-hover shadow-lg text-white font-bold w-full">
                  <Package className="h-6 w-6" />
                  <span className="font-semibold">Add Raw Material</span>
                </Button>
              </Link>
              <Link href="/finished-goods">
                <Button className="h-24 flex-col gap-3 bg-gradient-to-br from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 card-hover shadow-lg text-white font-bold w-full">
                  <Factory className="h-6 w-6" />
                  <span className="font-semibold">Log Production</span>
                </Button>
              </Link>
              <Link href="/dispatch">
                <Button className="h-24 flex-col gap-3 bg-gradient-to-br from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 card-hover shadow-lg text-white font-bold w-full">
                  <Truck className="h-6 w-6" />
                  <span className="font-semibold">Create Dispatch</span>
                </Button>
              </Link>
              <Link href="/attendance">
                <Button className="h-24 flex-col gap-3 bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 card-hover shadow-lg text-white font-bold w-full">
                  <Calendar className="h-6 w-6" />
                  <span className="font-semibold">Mark Attendance</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
