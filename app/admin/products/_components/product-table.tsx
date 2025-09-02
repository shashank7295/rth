'use client';

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../../../components/ui/data-table";
import { Button } from "../../../../components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
};

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <div className="h-10 w-10 rounded-md overflow-hidden">
        <img 
          src={row.getValue<string>("image") || "/placeholder-product.png"} 
          alt={row.getValue<string>("name")}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.getValue<number>("price");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => (
      <span className={row.getValue<number>("stock") > 0 ? "text-green-600" : "text-red-600"}>
        {row.getValue<number>("stock")}
      </span>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href={`/admin/products/${row.original.id}`}>
            <Edit className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="destructive" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];

// Mock data - replace with actual data fetching
const products: Product[] = [
  {
    id: "1",
    name: "Luxury Perfume",
    category: "Perfume",
    price: 89.99,
    stock: 15,
    image: "/placeholder-product.png"
  },
  {
    id: "2",
    name: "Premium Oud",
    category: "Oud",
    price: 129.99,
    stock: 8,
    image: "/placeholder-product.png"
  },
  // Add more mock products as needed
];

export function ProductTable() {
  return (
    <DataTable
      columns={columns}
      data={products}
      searchKey="name"
      placeholder="Filter products..."
    />
  );
}
