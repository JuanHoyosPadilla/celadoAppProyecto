import { useEffect, useState } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function ProtectedRoute({ user, children }) {
  const [islo, setIsLo] = useState(true);
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (!user) {
      return navigate("/");
    }
    if (user) {
      if (user.roles[0].name === "admin") {
        return navigate("/admin");
      }
      if (user.roles[0].name === "user") {
        return navigate("/panelcelador");
      }
    }
  }, [user]);



  return children ? children : <Outlet />;
}
