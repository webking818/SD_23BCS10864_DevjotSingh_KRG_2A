"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DollarSign, Users, Calculator, Download, Sparkles } from "lucide-react"

export default function Payroll() {
  const [payrollData, setPayrollData] = useState([
    {
      id: 1,
      employeeId: "EMP001",
      employeeName: "John Doe",
      department: "Production",
      baseSalary: 25000,
      daysWorked: 26,
      totalDays: 30,
      overtimeHours: 8,
      overtimeRate: 200,
      deductions: 2000,
      grossSalary: 0,
      netSalary: 0,
    },
    {
      id: 2,
      employeeId: "EMP002",
      employeeName: "Jane Smith",
      department: "Quality Control",
      baseSalary: 30000,
      daysWorked: 28,
      totalDays: 30,
      overtimeHours: 4,
      overtimeRate: 250,
      deductions: 2500,
      grossSalary: 0,
      netSalary: 0,
    },
    {
      id: 3,
      employeeId: "EMP003",
      employeeName: "Mike Johnson",
      department: "Packaging",
      baseSalary: 22000,
      daysWorked: 24,
      totalDays: 30,
      overtimeHours: 0,
      overtimeRate: 180,
      deductions: 1800,
      grossSalary: 0,
      netSalary: 0,
    },
  ])

  // Calculate payroll for each employee
  const calculatePayroll = () => {
    const updatedPayroll = payrollData.map((employee) => {
      const dailySalary = employee.baseSalary / employee.totalDays
      const earnedSalary = dailySalary * employee.daysWorked
      const overtimePay = employee.overtimeHours * employee.overtimeRate
      const grossSalary = earnedSalary + overtimePay
      const netSalary = grossSalary - employee.deductions

      return {
        ...employee,
        grossSalary: Math.round(grossSalary),
        netSalary: Math.round(netSalary),
      }
    })

    setPayrollData(updatedPayroll)
  }

  // Calculate totals
  const getTotalPayroll = () => {
    return payrollData.reduce((sum, employee) => sum + employee.netSalary, 0)
  }

  const getTotalEmployees = () => {
    return payrollData.length
  }

  const getAverageSalary = () => {
    const total = getTotalPayroll()
    return total > 0 ? Math.round(total / payrollData.length) : 0
  }

  // Auto-calculate on component mount
  useState(() => {
    calculatePayroll()
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/95 via-orange-50/95 to-red-50/95"></div>
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
      </div>

      <header className="relative z-10 flex h-20 shrink-0 items-center gap-2 border-b border-white/30 bg-white/90 backdrop-blur-sm px-6 shadow-sm">
        <SidebarTrigger className="-ml-1 hover:bg-yellow-100 transition-colors duration-200" />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent flex items-center gap-2">
                Payroll Management
                <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
              </h1>
              <p className="text-sm text-slate-700 font-semibold">Calculate and manage employee salaries</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={calculatePayroll}
            variant="outline"
            className="border-yellow-300 hover:bg-yellow-50 transition-all duration-300 text-slate-700 font-semibold"
          >
            <Calculator className="h-4 w-4 mr-2" />
            Recalculate
          </Button>
          <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl text-white font-bold">
            <Download className="h-4 w-4 mr-2" />
            Export Payroll
          </Button>
        </div>
      </header>

      <main className="relative z-10 flex-1 space-y-8 p-6">
        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-4 stagger-animation">
          <Card className="card-hover border-0 bg-gradient-to-br from-yellow-500 to-amber-600 text-white overflow-hidden relative shadow-xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-bold text-white">Total Employees</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <Users className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-white">{getTotalEmployees()}</div>
              <p className="text-xs text-white font-semibold">Active employees</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-0 bg-gradient-to-br from-orange-500 to-red-500 text-white overflow-hidden relative shadow-xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-bold text-white">Total Payroll</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <DollarSign className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-white">₹{getTotalPayroll().toLocaleString()}</div>
              <p className="text-xs text-white font-semibold">This month's total</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-0 bg-gradient-to-br from-amber-500 to-yellow-600 text-white overflow-hidden relative shadow-xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-bold text-white">Average Salary</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <Calculator className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-white">₹{getAverageSalary().toLocaleString()}</div>
              <p className="text-xs text-white font-semibold">Per employee</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-0 bg-gradient-to-br from-red-500 to-orange-600 text-white overflow-hidden relative shadow-xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-bold text-white">Processing Status</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Ready
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-white">100%</div>
              <p className="text-xs text-white font-semibold">Calculations complete</p>
            </CardContent>
          </Card>
        </div>

        {/* Payroll Table */}
        <Card className="card-hover border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden shadow-lg">
          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-md">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent font-bold">
                Monthly Payroll Calculation
              </span>
            </CardTitle>
            <CardDescription className="text-slate-700 font-semibold">
              Employee salary calculations for{" "}
              {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-slate-900 font-bold">Employee</TableHead>
                    <TableHead className="text-slate-900 font-bold">Department</TableHead>
                    <TableHead className="text-slate-900 font-bold">Base Salary</TableHead>
                    <TableHead className="text-slate-900 font-bold">Days Worked</TableHead>
                    <TableHead className="text-slate-900 font-bold">Overtime</TableHead>
                    <TableHead className="text-slate-900 font-bold">Gross Salary</TableHead>
                    <TableHead className="text-slate-900 font-bold">Deductions</TableHead>
                    <TableHead className="text-slate-900 font-bold">Net Salary</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payrollData.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div>
                          <p className="font-bold text-slate-900">{employee.employeeName}</p>
                          <p className="text-sm text-slate-700 font-medium">{employee.employeeId}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-slate-800 font-medium">{employee.department}</TableCell>
                      <TableCell className="text-slate-800 font-medium">
                        ₹{employee.baseSalary.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-slate-800 font-medium">
                        {employee.daysWorked}/{employee.totalDays}
                      </TableCell>
                      <TableCell className="text-slate-800 font-medium">
                        {employee.overtimeHours}h @ ₹{employee.overtimeRate}
                      </TableCell>
                      <TableCell className="text-slate-800 font-medium">
                        ₹{employee.grossSalary.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-slate-800 font-medium">
                        ₹{employee.deductions.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <span className="font-bold text-green-600 text-lg">₹{employee.netSalary.toLocaleString()}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Payroll Summary */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="card-hover border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden shadow-lg">
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-md">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold">
                  Payroll Breakdown
                </span>
              </CardTitle>
              <CardDescription className="text-slate-700 font-semibold">
                Department-wise salary distribution
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              {Array.from(new Set(payrollData.map((emp) => emp.department))).map((dept) => {
                const deptEmployees = payrollData.filter((emp) => emp.department === dept)
                const deptTotal = deptEmployees.reduce((sum, emp) => sum + emp.netSalary, 0)
                return (
                  <div
                    key={dept}
                    className="flex items-center justify-between p-4 border border-orange-200 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 shadow-sm"
                  >
                    <div>
                      <p className="font-bold text-slate-900">{dept}</p>
                      <p className="text-sm text-slate-700 font-medium">{deptEmployees.length} employees</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">₹{deptTotal.toLocaleString()}</p>
                      <p className="text-xs text-slate-600 font-medium">
                        {((deptTotal / getTotalPayroll()) * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          <Card className="card-hover border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden shadow-lg">
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-md">
                  <Calculator className="h-5 w-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent font-bold">
                  Payroll Actions
                </span>
              </CardTitle>
              <CardDescription className="text-slate-700 font-semibold">
                Quick actions for payroll processing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <Button className="w-full justify-start bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-md">
                <Download className="h-4 w-4 mr-2" />
                Export Salary Slips
              </Button>
              <Button className="w-full justify-start bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold shadow-md">
                <Calculator className="h-4 w-4 mr-2" />
                Generate Tax Reports
              </Button>
              <Button className="w-full justify-start bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-semibold shadow-md">
                <Users className="h-4 w-4 mr-2" />
                Send Salary Notifications
              </Button>
              <Button className="w-full justify-start bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold shadow-md">
                <DollarSign className="h-4 w-4 mr-2" />
                Process Bank Transfers
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
