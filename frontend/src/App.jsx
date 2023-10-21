import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPages from "./pages/LoginPages";
import PanelAdmin from "./pages/PanelAdmin";
import { GlobalContext } from "./context/GlobalContext";
import PanelCelador from "./pages/PanelCelador";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Loader from "./components/Loader";

function App() {
  const { user } = useContext(GlobalContext);
  const [isLoader, setIsLoader] = useState(true);

  setTimeout(() => {
    setIsLoader(false);
  }, 500);

  return isLoader ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={user}>
              <LoginPages />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute user={user}>
              <Layout>
                <PanelAdmin />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/panelcelador"
          element={
            <ProtectedRoute user={user}>
              <Layout>
                <PanelCelador />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
