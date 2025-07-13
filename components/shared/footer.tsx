// app/components/Footer.tsx
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-700">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4 text-center md:text-left">
          <img src="/logo.svg" alt="Logo" className="w-28" />
          <img
            src="/billing-dashboard.png"
            alt="Dashboard"
            className="w-full max-w-xs mx-auto"
          />
          <p className="font-medium">
            Need a solution for{" "}
            <span className="text-green-600">advanced billing</span> needs?
          </p>
          <p>
            Check out our end-to-end billing software built for fast-growing
            businesses.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Learn More →
            </a>
          </p>
        </div>

        {/* Other Lanot Apps Apps */}
        <div>
          <h4 className="font-semibold mb-2">OTHER LANOT APPS</h4>
          <ul className="space-y-1">
            <li>Accounting Software</li>
            <li>Ecommerce Software</li>
            <li>Expense Reporting</li>
            <li>Subscription Billing</li>
            <li>Inventory Management</li>
            <li>CRM & Other Apps</li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h4 className="font-semibold mb-2">HELP & SUPPORT</h4>
          <ul className="space-y-1">
            <li>Contact Support</li>
            <li>Knowledge Base</li>
            <li>Help Documentation</li>
            <li>Webinar</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">QUICK LINKS</h4>
          <ul className="space-y-1">
            <li>Mobile apps</li>
            <li>Add-ons</li>
            <li>What's New?</li>
          </ul>
        </div>
      </div>

      <Separator />

      <div className="text-center text-xs text-gray-500 py-4">
        © 2025, Lanot Apps Corporation Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
