import { AdminNavbar } from "./AdminNavbar";

export const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      {children}
      <p>Footer</p>
    </>
  );
};
