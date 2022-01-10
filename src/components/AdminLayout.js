import { AdminNavbar } from "./AdminNavbar";
import Footer from "./Footer";

export const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      {children}
      <Footer/>
    </>
  );
};
