import type { ReactNode } from "react";
import AuthProviderWrapper from "./auth-provider-wrapper";
import AdminNavbar from "./_components/navbar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProviderWrapper>
      <AdminNavbar />
      <div className="container mx-auto p-4">{children}</div>
    </AuthProviderWrapper>
  );
}
