"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, QrCode, Printer, Edit, Trash2 } from "lucide-react"

export function PlantItemMasterForm() {
  const [status, setStatus] = useState("active")
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
    }
  }

  const bomData = [
    {
      stage: "Stage 1",
      bom: "BOM 1",
      item: "Plant 1",
      description: "This is a Tree",
      unitOfMeasure: "Ton",
      qtyAvailable: 12,
      unitOfMeasure2: "Ton",
      qtyNeeded: 10,
    },
    {
      stage: "Stage 1",
      bom: "BOM 1",
      item: "Plant2",
      description: "This is a Tree",
      unitOfMeasure: "PCs",
      qtyAvailable: 230,
      unitOfMeasure2: "PCs",
      qtyNeeded: 200,
    },
    {
      stage: "stage 1",
      bom: "BOM 1",
      item: "Plant3",
      description: "This is a Tree",
      unitOfMeasure: "Carton",
      qtyAvailable: 45,
      unitOfMeasure2: "Carton",
      qtyNeeded: 23,
    },
    {
      stage: "stage 2",
      bom: "BOM 2",
      item: "Plant4",
      description: "This is a flowering Plant",
      unitOfMeasure: "Box",
      qtyAvailable: 67,
      unitOfMeasure2: "Box",
      qtyNeeded: 45,
    },
    {
      stage: "Stage 2",
      bom: "BOM 2",
      item: "Plant5",
      description: "This is a flowering Plant",
      unitOfMeasure: "PC",
      qtyAvailable: 456,
      unitOfMeasure2: "Category3",
      qtyNeeded: 56,
    },
    {
      stage: "Stage 2",
      bom: "BOM 2",
      item: "Plant6",
      description: "This is a flowering plant",
      unitOfMeasure: "KG",
      qtyAvailable: 234,
      unitOfMeasure2: "Category4",
      qtyNeeded: 67,
    },
    {
      stage: "stage 3",
      bom: "BOM 3",
      item: "Plant7",
      description: "This is a flowering plant",
      unitOfMeasure: "M3",
      qtyAvailable: 96,
      unitOfMeasure2: "Category4",
      qtyNeeded: 8,
    },
  ]

  const stagesData = [
    {
      stageId: "001",
      name: "stage 1",
      barcode: "|||||||||||||||",
      period: "6 weeks",
      bomId: "BOM01",
      addButtonColor: "green",
    },
    {
      stageId: "003",
      name: "stage 2",
      barcode: "|||||||||||||||",
      period: "3 weeks",
      bomId: "BOM02",
      addButtonColor: "orange",
    },
    {
      stageId: "004",
      name: "Stage 3",
      barcode: "|||||||||||||||",
      period: "4 weeks",
      bomId: "BOM03",
      addButtonColor: "green",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-2">
          <span>Home</span>
          <span className="mx-2">›</span>
          <span>Plant/Item Master</span>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Add New Plant</span>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl font-medium text-gray-700 mb-8">New Plant / Item Master</h1>

        <Card className="bg-white shadow-sm">
          <CardContent className="p-8">
            {/* Top Form Section */}
            <div className="flex gap-4 mb-2">
              {" "}
              {/* reduced margin from mb-1 to mb-0 */}
              {/* Top Form Section - reduced to 9 columns */}
              <div>
                <div className="flex-1 mb-10">
                  <div className="grid grid-cols-9 gap-4">
                    {/* Plant/Item ID */}
                    <div className="col-span-3">
                      <Label htmlFor="plantId" className="text-sm font-medium text-gray-600 mb-2 block">
                        Plant/Item ID
                      </Label>
                      <Input
                        id="plantId"
                        placeholder="Plant/Item ID"
                        className="h-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    {/* Scientific Name */}
                    <div className="col-span-3">
                      <Label htmlFor="scientificName" className="text-sm font-medium text-gray-600 mb-2 block">
                        Scientific Name
                      </Label>
                      <Input
                        id="scientificName"
                        placeholder="Enter Equipment Name"
                        className="h-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    {/* Class */}
                    <div className="col-span-3" >
                      <Label htmlFor="class" className="text-sm font-medium text-gray-600 mb-2 block">
                        Class
                      </Label>
                      <Input
                        id="class"
                        placeholder="Class"
                        className="h-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mb-6">
                  {/* Item Description in Arabic */}
                  <div className="col-span-3">
                    <Label htmlFor="descriptionArabic" className="text-sm font-medium text-gray-600 mb-2 block">
                      Item Description in Arabic
                    </Label>
                    <Input
                      id="descriptionArabic"
                      placeholder="Enter Description in Arabic"
                      className="h-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  {/* Item Description */}
                  <div className="col-span-3">
                    <Label htmlFor="description" className="text-sm font-medium text-gray-600 mb-2 block">
                      Item Description
                    </Label>
                    <Input
                      id="description"
                      placeholder="Enter Description in English"
                      className="h-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  {/* Status */}
                  <div className="col-span-3">
                    <Label className="text-sm font-medium text-gray-600 mb-2 block">Status*</Label>
                    <RadioGroup value={status} onValueChange={setStatus} className="flex gap-6 mt-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="active" id="active" className="border-purple-500 text-purple-500" />
                        <Label htmlFor="active" className="text-sm font-medium">
                          Active
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="inactive" id="inactive" className="border-gray-300" />
                        <Label htmlFor="inactive" className="text-sm font-medium text-gray-500">
                          Inactive
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>


              </div>
              {/* Image Upload - moved outside grid, positioned on right */}
              <div className="w-64" style={{ marginTop: "30px" }}>
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="image-upload" />
                <label
                  htmlFor="image-upload"
                  className="border-2 border-dashed border-gray-200 rounded-lg h-32 flex flex-col items-center justify-center text-gray-400 hover:border-purple-300 transition-colors cursor-pointer"
                >
                  <Upload className="h-8 w-8 mb-2 text-purple-400" />
                  <span className="text-sm">
                    {selectedImage ? selectedImage.name : "Drop image here or click to browse"}
                  </span>
                  <span className="text-xs">Supports JPG files</span>
                </label>
              </div>
            </div>

            {/* Description Section */}


            {/* Barcode Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant="outline"
                className="h-10 px-8 border-purple-500 text-purple-600 hover:bg-purple-50 bg-transparent"
              >
                <QrCode className="h-4 w-4 mr-2" />
                Generate Barcode
              </Button>
              <Button
                variant="outline"
                className="h-10 px-8 border-purple-500 text-purple-600 hover:bg-purple-50 bg-transparent"
              >
                <Printer className="h-4 w-4 mr-2" />
                Print Barcode
              </Button>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-transparent border-b border-gray-200 rounded-none h-auto p-0">
                <TabsTrigger
                  value="general"
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-purple-500 data-[state=active]:text-purple-600 rounded-none pb-3 font-medium border-0 data-[state=active]:shadow-none"
                >
                  General
                </TabsTrigger>
                <TabsTrigger
                  value="stages"
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-purple-500 data-[state=active]:text-purple-600 rounded-none pb-3 font-medium text-gray-500 border-0 data-[state=active]:shadow-none"
                >
                  Stages
                </TabsTrigger>
                <TabsTrigger
                  value="bom"
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-purple-500 data-[state=active]:text-purple-600 rounded-none pb-3 font-medium text-gray-500 border-0 data-[state=active]:shadow-none"
                >
                  BOM
                </TabsTrigger>
                <TabsTrigger
                  value="barcodes"
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-purple-500 data-[state=active]:text-purple-600 rounded-none pb-3 font-medium text-gray-500 border-0 data-[state=active]:shadow-none"
                >
                  Barcodes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="mt-8">
                {/* General Tab Content */}
                <div className="grid grid-cols-12 gap-4 mb-8">
                  {/* Category */}
                  <div className="col-span-3">
                    <Label htmlFor="category" className="text-sm font-medium text-gray-600 mb-2 block">
                      Category
                    </Label>
                    <Input
                      id="category"
                      placeholder="Category"
                      className="h-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  {/* Sub Category */}
                  <div className="col-span-3">
                    <Label htmlFor="subCategory" className="text-sm font-medium text-gray-600 mb-2 block">
                      Sub Category
                    </Label>
                    <Input
                      id="subCategory"
                      placeholder="Sub Category"
                      className="h-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  {/* Type */}
                  <div className="col-span-3">
                    <Label htmlFor="type" className="text-sm font-medium text-gray-600 mb-2 block">
                      Type
                    </Label>
                    <Input
                      id="type"
                      placeholder="Type"
                      className="h-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  {/* Season */}
                  <div className="col-span-3">
                    <Label htmlFor="season" className="text-sm font-medium text-gray-600 mb-2 block">
                      Season
                    </Label>
                    <Input
                      id="season"
                      placeholder="Season"
                      className="h-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Quantity Section */}
                <div className="grid grid-cols-12 gap-4 mb-8">
                  {/* Min Qty */}
                  <div className="col-span-3">
                    <Label htmlFor="minQty" className="text-sm font-medium text-gray-600 mb-2 block">
                      Min Qty *
                    </Label>
                    <Input
                      id="minQty"
                      placeholder="Min Qty"
                      className="h-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  {/* Max Qty */}
                  <div className="col-span-3">
                    <Label htmlFor="maxQty" className="text-sm font-medium text-gray-600 mb-2 block">
                      Max Qty*
                    </Label>
                    <Input
                      id="maxQty"
                      placeholder="Max Qty"
                      className="h-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  {/* Reorder Qty */}
                  <div className="col-span-3">
                    <Label htmlFor="reorderQty" className="text-sm font-medium text-gray-600 mb-2 block">
                      Reorder Qty*
                    </Label>
                    <Input
                      id="reorderQty"
                      placeholder="Reorder Qty"
                      className="h-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  {/* Price Level */}
                  <div className="col-span-3">
                    <Label htmlFor="priceLevel" className="text-sm font-medium text-gray-600 mb-2 block">
                      Price Level
                    </Label>
                    <Input
                      id="priceLevel"
                      placeholder="Price Level"
                      className="h-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="stages">
                <div className="py-6">
                  {/* Stages Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium text-gray-700">Showing all Item List</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">Showing 1-10 of 10 total</span>
                      <Select defaultValue="10">
                        <SelectTrigger className="w-32 h-8 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 per page</SelectItem>
                          <SelectItem value="25">25 per page</SelectItem>
                          <SelectItem value="50">50 per page</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Stages Data Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Stage ID</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Name</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Barcode</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Period</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">BOM ID</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Action</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Add</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stagesData.map((row, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm text-gray-700">{row.stageId}</td>
                            <td className="py-3 px-4 text-sm text-gray-700">{row.name}</td>
                            <td className="py-3 px-4 text-sm text-gray-700 font-mono">{row.barcode}</td>
                            <td className="py-3 px-4 text-sm text-gray-700">{row.period}</td>
                            <td className="py-3 px-4 text-sm text-gray-700">{row.bomId}</td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                <button className="p-1 hover:bg-gray-100 rounded">
                                  <Edit className="h-4 w-4 text-gray-500" />
                                </button>
                                <button className="p-1 hover:bg-gray-100 rounded">
                                  <Trash2 className="h-4 w-4 text-gray-500" />
                                </button>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <Button
                                size="sm"
                                className={`h-8 px-4 text-xs text-white ${row.addButtonColor === "green"
                                    ? "bg-green-500 hover:bg-green-600"
                                    : "bg-orange-500 hover:bg-orange-600"
                                  }`}
                              >
                                Add
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="bom">
                <div className="py-6">
                  {/* BOM Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium text-gray-700">Showing all Item List</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">Showing 1-10 of 10 total</span>
                      <Select defaultValue="10">
                        <SelectTrigger className="w-32 h-8 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 per page</SelectItem>
                          <SelectItem value="25">25 per page</SelectItem>
                          <SelectItem value="50">50 per page</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* BOM Data Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Stage</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">BOM</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Item</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Short Description</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Unit Of Measure</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Qty Available</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Unit Of Measure</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">QTY Needed</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Action</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Add</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bomData.map((row, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm text-gray-700">{row.stage}</td>
                            <td className="py-3 px-4 text-sm text-gray-700">{row.bom}</td>
                            <td className="py-3 px-4 text-sm text-gray-700">{row.item}</td>
                            <td className="py-3 px-4 text-sm text-gray-700">{row.description}</td>
                            <td className="py-3 px-4 text-sm text-gray-700 bg-blue-50">{row.unitOfMeasure}</td>
                            <td className="py-3 px-4 text-sm text-gray-700 bg-blue-50">{row.qtyAvailable}</td>
                            <td className="py-3 px-4 text-sm text-gray-700">{row.unitOfMeasure2}</td>
                            <td className="py-3 px-4 text-sm text-gray-700">{row.qtyNeeded}</td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                <button className="p-1 hover:bg-gray-100 rounded">
                                  <Edit className="h-4 w-4 text-gray-500" />
                                </button>
                                <button className="p-1 hover:bg-gray-100 rounded">
                                  <Trash2 className="h-4 w-4 text-gray-500" />
                                </button>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white h-8 px-4 text-xs">
                                Add
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="barcodes">
                <div className="py-8 text-center text-gray-500">Barcodes content will be displayed here</div>
              </TabsContent>
            </Tabs>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 pt-8">
              <Button
                variant="outline"
                className="h-10 px-8 bg-purple-600 text-white border-purple-600 hover:bg-purple-700 hover:border-purple-700"
              >
                Save as Draft
              </Button>
              <Button className="h-10 px-8 bg-purple-600 hover:bg-purple-700">Submit</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
