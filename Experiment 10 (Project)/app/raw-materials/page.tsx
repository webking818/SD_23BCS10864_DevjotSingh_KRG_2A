"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, AlertTriangle, Package, Warehouse, Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function RawMaterials() {
  const { toast } = useToast()
  const [materials, setMaterials] = useState([
    {
      id: 1,
      name: "Raw Material A",
      supplier: "Supplier ABC",
      currentStock: 50,
      reorderLevel: 100,
      unit: "kg",
      lastInward: "2024-01-15",
      batchNo: "RM001-2024",
    },
    {
      id: 2,
      name: "Chemical B",
      supplier: "ChemCorp Ltd",
      currentStock: 200,
      reorderLevel: 150,
      unit: "liters",
      lastInward: "2024-01-10",
      batchNo: "CH002-2024",
    },
    {
      id: 3,
      name: "Packaging Material",
      supplier: "PackPro Industries",
      currentStock: 75,
      reorderLevel: 200,
      unit: "pieces",
      lastInward: "2024-01-12",
      batchNo: "PK003-2024",
    },
  ])

  const [newMaterial, setNewMaterial] = useState({
    name: "",
    supplier: "",
    quantity: "",
    unit: "",
    batchNo: "",
  })

  const handleAddMaterial = () => {
    if (!newMaterial.name || !newMaterial.supplier || !newMaterial.quantity) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    const material = {
      id: materials.length + 1,
      name: newMaterial.name,
      supplier: newMaterial.supplier,
      currentStock: Number.parseInt(newMaterial.quantity),
      reorderLevel: 100, // Default reorder level
      unit: newMaterial.unit,
      lastInward: new Date().toISOString().split("T")[0],
      batchNo: newMaterial.batchNo,
    }

    setMaterials([...materials, material])
    setNewMaterial({ name: "", supplier: "", quantity: "", unit: "", batchNo: "" })

    toast({
      title: "Success",
      description: "Raw material added successfully",
    })
  }

  const getLowStockCount = () => {
    return materials.filter((m) => m.currentStock < m.reorderLevel).length
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/95 via-teal-50/95 to-green-50/95"></div>
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
      </div>

      <header className="relative z-10 flex h-20 shrink-0 items-center gap-2 border-b border-white/30 bg-white/90 backdrop-blur-sm px-6 shadow-sm">
        <SidebarTrigger className="-ml-1 hover:bg-emerald-100 transition-colors duration-200" />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg">
              <Warehouse className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent flex items-center gap-2">
                Raw Materials Management
                <Sparkles className="h-5 w-5 text-emerald-500 animate-pulse" />
              </h1>
              <p className="text-sm text-slate-700 font-semibold">Track inventory, usage, and reorder alerts</p>
            </div>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Plus className="h-4 w-4 mr-2" />
              Add Material
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Raw Material Inward</DialogTitle>
              <DialogDescription>Enter details for new raw material stock</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Material Name</Label>
                <Input
                  id="name"
                  value={newMaterial.name}
                  onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
                  placeholder="Enter material name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="supplier">Supplier</Label>
                <Input
                  id="supplier"
                  value={newMaterial.supplier}
                  onChange={(e) => setNewMaterial({ ...newMaterial, supplier: e.target.value })}
                  placeholder="Enter supplier name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={newMaterial.quantity}
                    onChange={(e) => setNewMaterial({ ...newMaterial, quantity: e.target.value })}
                    placeholder="Enter quantity"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="unit">Unit</Label>
                  <Select
                    value={newMaterial.unit}
                    onValueChange={(value) => setNewMaterial({ ...newMaterial, unit: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Kilograms</SelectItem>
                      <SelectItem value="liters">Liters</SelectItem>
                      <SelectItem value="pieces">Pieces</SelectItem>
                      <SelectItem value="tons">Tons</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="batch">Batch Number</Label>
                <Input
                  id="batch"
                  value={newMaterial.batchNo}
                  onChange={(e) => setNewMaterial({ ...newMaterial, batchNo: e.target.value })}
                  placeholder="Enter batch number"
                />
              </div>
              <Button onClick={handleAddMaterial} className="w-full">
                Add Material
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </header>

      <main className="flex-1 space-y-6 p-6">
        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-3 stagger-animation">
          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 shadow-md hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-dark">Total Materials</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-dark">{materials.length}</div>
              <p className="text-xs text-muted-foreground">Active raw materials</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-rose-50 to-red-50 shadow-md hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-dark">Low Stock Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-500 animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{getLowStockCount()}</div>
              <p className="text-xs text-muted-foreground">Items below reorder level</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-violet-50 to-purple-50 shadow-md hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-dark">Total Value</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-dark">₹2,45,000</div>
              <p className="text-xs text-muted-foreground">Estimated inventory value</p>
            </CardContent>
          </Card>
        </div>

        {/* Materials Table */}
        <Card className="card-hover border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden shadow-lg">
          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg shadow-md">
                <Warehouse className="h-5 w-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-bold">
                Raw Materials Inventory
              </span>
            </CardTitle>
            <CardDescription className="text-slate-700 font-semibold">
              Current stock levels and reorder status
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-slate-900 font-bold">Material Name</TableHead>
                  <TableHead className="text-slate-900 font-bold">Supplier</TableHead>
                  <TableHead className="text-slate-900 font-bold">Current Stock</TableHead>
                  <TableHead className="text-slate-900 font-bold">Reorder Level</TableHead>
                  <TableHead className="text-slate-900 font-bold">Status</TableHead>
                  <TableHead className="text-slate-900 font-bold">Last Inward</TableHead>
                  <TableHead className="text-slate-900 font-bold">Batch No.</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {materials.map((material) => (
                  <TableRow key={material.id}>
                    <TableCell className="font-bold text-slate-900">{material.name}</TableCell>
                    <TableCell className="text-slate-800 font-medium">{material.supplier}</TableCell>
                    <TableCell className="text-slate-800 font-medium">
                      {material.currentStock} {material.unit}
                    </TableCell>
                    <TableCell className="text-slate-800 font-medium">
                      {material.reorderLevel} {material.unit}
                    </TableCell>
                    <TableCell>
                      <Badge variant={material.currentStock < material.reorderLevel ? "destructive" : "secondary"}>
                        {material.currentStock < material.reorderLevel ? "Low Stock" : "In Stock"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-slate-800 font-medium">{material.lastInward}</TableCell>
                    <TableCell className="text-slate-800 font-medium">{material.batchNo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
