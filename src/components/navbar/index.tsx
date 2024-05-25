import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/global";

const Navbar = () => {
  const { logged } = useGlobal();

  return (
    <div className="border-b-2">
      <div className="h-16 max-w-5xl mx-auto flex justify-between border-black">
        <div className="flex items-center">
          <Link to="/">
            <button className="bg-blue-700 p-3 rounded-sm">IR INICIO</button>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {logged ? (
            <Link to="/captured">
              <button className="bg-blue-700 p-3 rounded-sm">
                VER CAPTURADOS
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="bg-blue-700 p-3 rounded-sm">
                INICIAR SESION
              </button>
            </Link>
          )}

          <p className="text-black text-lg font-semibold">
            {logged ? "Logueado" : "No logueado"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
