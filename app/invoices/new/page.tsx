"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function NewInvoiceForm() {
  const [items, setItems] = useState([
    { id: 1, description: "", qty: 1, rate: 0, tax: 0 },
  ]);

  const addItem = () =>
    setItems((prev) => [
      ...prev,
      { id: Date.now(), description: "", qty: 1, rate: 0, tax: 0 },
    ]);

  const removeItem = (id: number) =>
    setItems((prev) => prev.filter((item) => item.id !== id));

  return (
    <form className="space-y-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">New Invoice</h2>

      {/* Customer + Invoice Info */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <Label>Customer</Label>
          <Input placeholder="John Doe / Company Name" />
        </div>
        <div>
          <Label>Invoice Date</Label>
          <Input type="date" />
        </div>
        <div>
          <Label>Due Date</Label>
          <Input type="date" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label>Invoice #</Label>
          <Input placeholder="INV-0001" />
        </div>
        <div>
          <Label>Reference</Label>
          <Input />
        </div>
      </div>

      {/* Item Table */}
      <div className="border rounded-md overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-2 text-left">Description</th>
              <th className="p-2">Qty</th>
              <th className="p-2">Rate</th>
              <th className="p-2">Tax</th>
              <th className="p-2">Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={item.id} className="border-t">
                <td className="p-2">
                  <Input
                    placeholder="Service or product"
                    value={item.description}
                    onChange={(e) =>
                      setItems((prev) =>
                        prev.map((it, i) =>
                          i === idx
                            ? { ...it, description: e.target.value }
                            : it
                        )
                      )
                    }
                  />
                </td>
                <td className="p-2">
                  <Input
                    type="number"
                    value={item.qty}
                    onChange={(e) =>
                      setItems((prev) =>
                        prev.map((it, i) =>
                          i === idx
                            ? { ...it, qty: Number(e.target.value) }
                            : it
                        )
                      )
                    }
                  />
                </td>
                <td className="p-2">
                  <Input
                    type="number"
                    value={item.rate}
                    onChange={(e) =>
                      setItems((prev) =>
                        prev.map((it, i) =>
                          i === idx
                            ? { ...it, rate: Number(e.target.value) }
                            : it
                        )
                      )
                    }
                  />
                </td>
                <td className="p-2">
                  <Select
                    onValueChange={(value) =>
                      setItems((prev) =>
                        prev.map((it, i) =>
                          i === idx ? { ...it, tax: Number(value) } : it
                        )
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Tax %" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0%</SelectItem>
                      <SelectItem value="5">5%</SelectItem>
                      <SelectItem value="10">10%</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="p-2">
                  {(item.qty * item.rate * (1 + item.tax / 100) || 0).toFixed(
                    2
                  )}
                </td>
                <td className="p-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                  >
                    ❌
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-2">
          <Button type="button" variant="outline" onClick={addItem}>
            + Add Item
          </Button>
        </div>
      </div>

      {/* Notes & Totals */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label>Customer Notes</Label>
          <Textarea placeholder="Optional notes displayed on the invoice..." />
        </div>
        <div>
          <Label>Terms & Conditions</Label>
          <Textarea placeholder="Payment terms, policies, etc." />
        </div>
      </div>

      {/* Totals */}
      <div className="text-right">
        <div className="text-lg font-semibold">
          Total: $
          {items
            .reduce(
              (acc, item) => acc + item.qty * item.rate * (1 + item.tax / 100),
              0
            )
            .toFixed(2)}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        <Button variant="secondary" type="button">
          Save as Draft
        </Button>
        <Button type="submit">Send Invoice</Button>
      </div>
    </form>
  );
}
