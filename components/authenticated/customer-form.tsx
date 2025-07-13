"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CustomerForm() {
  const [customerType, setCustomerType] = useState("Business");

  return (
    <motion.div
      className="p-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>New Customer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Label className="text-sm font-medium">Customer Type</Label>
            <RadioGroup
              defaultValue="Business"
              onValueChange={setCustomerType}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Business" id="business" />
                <Label htmlFor="business">Business</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Individual" id="individual" />
                <Label htmlFor="individual">Individual</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Salutation</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Salutation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr">Mr.</SelectItem>
                  <SelectItem value="ms">Ms.</SelectItem>
                  <SelectItem value="mrs">Mrs.</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>First Name</Label>
              <Input placeholder="First Name" />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input placeholder="Last Name" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Company Name</Label>
              <Input placeholder="Company Name" />
            </div>
            <div>
              <Label className="text-red-500">Display Name *</Label>
              <Input placeholder="Display Name" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Currency</Label>
              <Select disabled>
                <SelectTrigger>
                  <SelectValue placeholder="US Dollar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">US Dollar</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">
                Currency cannot be edited as multi-currency handling is
                unavailable.
              </p>
            </div>
            <div>
              <Label>Email Address</Label>
              <Input type="email" placeholder="Email Address" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Phone</Label>
              <div className="flex gap-2">
                <Input placeholder="Work Phone" />
                <Input placeholder="Mobile" />
              </div>
            </div>
          </div>

          <Tabs defaultValue="details">
            <TabsList>
              <TabsTrigger value="details">Other Details</TabsTrigger>
              <TabsTrigger value="address">Address</TabsTrigger>
              <TabsTrigger value="contacts">Contact Persons</TabsTrigger>
              <TabsTrigger value="custom">Custom Fields</TabsTrigger>
              <TabsTrigger value="remarks">Remarks</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <Label>Tax Rate</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Tax" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vat">VAT</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Payment Terms</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Due on Receipt" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="receipt">Due on Receipt</SelectItem>
                      <SelectItem value="15days">15 Days</SelectItem>
                      <SelectItem value="30days">30 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Price List</Label>
                  <Input placeholder="Price List" />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-2">
            <Button variant="default">Save</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
