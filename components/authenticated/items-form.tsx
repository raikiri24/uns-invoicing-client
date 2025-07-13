"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ItemsForm() {
  const [itemType, setItemType] = useState("Goods");

  return (
    <motion.div
      className="p-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>New Item</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Label className="text-sm font-medium">Type</Label>
            <RadioGroup
              defaultValue="Goods"
              onValueChange={setItemType}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Goods" id="goods" />
                <Label htmlFor="goods">Goods</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Service" id="service" />
                <Label htmlFor="service">Service</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-red-500">Name *</Label>
              <Input placeholder="Item Name" required />
            </div>
            <div>
              <Label>Unit</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select or type to add" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="piece">Piece</SelectItem>
                  <SelectItem value="hour">Hour</SelectItem>
                  <SelectItem value="service">Service</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-red-500">Selling Price *</Label>
              <div className="flex gap-2">
                <div className="w-16 flex items-center justify-center bg-muted rounded-md">
                  USD
                </div>
                <Input type="number" placeholder="0.00" required />
              </div>
            </div>
            <div>
              <Label>Tax</Label>
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
          </div>

          <div>
            <Label>Description</Label>
            <Textarea placeholder="Optional description" rows={4} />
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="default">Save</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
