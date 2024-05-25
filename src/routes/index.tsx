ROUTES;
import App from "../App";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../utils/constants";
import Login from "../pages/login";
import Pokemon from "../pages/pokemon";
import Captured from "../pages/captured";
import { useGlobal } from "../context/global";

const ListRoutes = () => {
  const { logged } = useGlobal();
  return (
    <Routes>
      {!logged ? (
        <Route path={ROUTES.LOGIN} element={<Login />} />
      ) : (
        <Route path={ROUTES.CAPTURED} element={<Captured />} />
      )}
      <Route path={ROUTES.POKEMON} element={<Pokemon />} />
      <Route path={ROUTES.BASE} element={<App />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default ListRoutes;
