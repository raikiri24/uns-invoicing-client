"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function NewQuoteForm() {
  const [items, setItems] = useState([
    { id: 1, quantity: 1, rate: 0, discount: 0, tax: 0 },
  ]);

  return (
    <form className="space-y-8 p-6 bg-white rounded shadow-sm">
      {/* Customer Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label>Customer Name</Label>
          <Input placeholder="Sheila Lind II" />
        </div>
        <div>
          <Label>Currency</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quote Details */}
      <div className="grid md:grid-cols-4 gap-6">
        <div>
          <Label>Quote #</Label>
          <Input placeholder="EST-0000" />
        </div>
        <div>
          <Label>Reference #</Label>
          <Input />
        </div>
        <div>
          <Label>Quote Date</Label>
          <Input type="date" />
        </div>
        <div>
          <Label>Expiry Date</Label>
          <Input type="date" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label>Salesperson</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a salesperson" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="john">John</SelectItem>
              <SelectItem value="jane">Jane</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Project Name</Label>
          <Input />
        </div>
      </div>

      {/* Item Table */}
      <div className="border rounded-md overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-2 text-left">Item</th>
              <th className="p-2">Qty</th>
              <th className="p-2">Rate</th>
              <th className="p-2">Discount</th>
              <th className="p-2">Tax</th>
              <th className="p-2">Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={item.id} className="border-t">
                <td className="p-2">
                  <Input placeholder="Item name" />
                </td>
                <td className="p-2">
                  <Input type="number" defaultValue={item.quantity} />
                </td>
                <td className="p-2">
                  <Input type="number" defaultValue={item.rate} />
                </td>
                <td className="p-2">
                  <Input type="number" defaultValue={item.discount} />
                </td>
                <td className="p-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tax" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0%</SelectItem>
                      <SelectItem value="5">5%</SelectItem>
                      <SelectItem value="10">10%</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="p-2">0.00</td>
                <td className="p-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setItems((prev) => prev.filter((_, i) => i !== idx))
                    }
                  >
                    ❌
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-2">
          <Button
            variant="outline"
            onClick={() =>
              setItems((prev) => [
                ...prev,
                { id: Date.now(), quantity: 1, rate: 0, discount: 0, tax: 0 },
              ])
            }
          >
            + Add Item
          </Button>
        </div>
      </div>

      {/* Totals */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <Label>Shipping Charges</Label>
          <Input type="number" />
        </div>
        <div>
          <Label>Adjustment</Label>
          <Input type="number" />
        </div>
        <div className="col-span-2 flex items-center justify-end text-xl font-semibold">
          Total: $0.00
        </div>
      </div>

      {/* Notes & Terms */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label>Customer Notes</Label>
          <Textarea placeholder="Will be displayed on the quote" />
        </div>
        <div>
          <Label>Terms & Conditions</Label>
          <Textarea placeholder="Enter the terms and conditions..." />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4 pt-4">
        <Button variant="secondary">Save as Draft</Button>
        <Button type="submit">Save and Send</Button>
      </div>
    </form>
  );
}
