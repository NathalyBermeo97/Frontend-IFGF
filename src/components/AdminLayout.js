import { AdminNavbar } from "./AdminNavbar";
import Footer from "./Footer";

export const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      <div style={{minHeight: '100vh'}}>{children}</div>
      <Footer />
    </>
  );
};
