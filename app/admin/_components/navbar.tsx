"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/auth-context";

export default function AdminNavbar() {
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/admin">Admin Dashboard</Link>
        </div>
        <div className="flex items-center">
          <Link href="/admin/products">
            <span
              className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                pathname === "/admin/products" ? "bg-gray-900" : "hover:bg-gray-700"
              }`}>
              All Products
            </span>
          </Link>
          {isAuthenticated && (
            <button
              onClick={logout}
              className="ml-4 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
