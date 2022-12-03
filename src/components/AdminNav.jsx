import { Link } from "react-router-dom";
const AdminNav = () => {
  return (
    <nav className="flex gap-3">
      <Link to="/admin" className="font-bold uppercase text-gray-500">
        Administración
      </Link>
      <Link to="/sales" className="font-bold uppercase text-gray-500">
        Ventas
      </Link>
    </nav>
  );
};

export default AdminNav;
