"use client";

import { Button } from "../../../components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { ProductTable } from "./_components/product-table";
import withAuth from "../_components/with-auth";

function ProductsPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button asChild>
          <Link href="/admin/products/new" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>
      
      <div className="bg-white rounded-lg border">
        <ProductTable />
      </div>
    </div>
  );
}

export default withAuth(ProductsPage);
