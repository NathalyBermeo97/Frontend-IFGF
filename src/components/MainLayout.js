import { useRouter } from "next/router";
import React from "react";
import { AdminLayout } from "./AdminLayout";
import { FinalUserLayout } from "./FinalUserLayout";

export const MainLayout = ({ children }) => {
  const router = useRouter();
  return router.pathname.startsWith("/admin") ? (
    <AdminLayout children={children} />
  ) : (
    <FinalUserLayout children={children} />
  );
};
