import React, { useId } from "react";

import { validateEmail } from "../functions/validateEmail";

const Auth = () => {
  const id = useId();

  const handleLogin = () => {
    console.log(`Login with ${id}`);
  };

  const handleRegister = () => {
    console.log(`Register with ${id}`);
  };

  return (
    <div className="h-[calc(100vh-80px)]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:mx-auto items-center p-10 w-full lg:w-2/3 lg:items-center">
        <div className="p-4 bg-white w-80 md:w-[380px] lg:w-[420px] h-full rounded-lg shadow-md mb-16 lg:mb-0">
          <form onSubmit={handleLogin}>
            <h1 className="text-center font-semibold text-xl">Inicia sesión</h1>

            <div className="bg-white mt-4 p-3">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                htmlFor="email"
                className="contactinput"
                id={id}
              />

              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                htmlFor="password"
                className="contactinput"
                id={id}
              />
            </div>

            <div className="w-full flex items-center justify-center p-4">
              <button
                type="submit"
                className="bg-flora-base text-white font-medium px-3 py-2 rounded-md"
              >
                Inicia Sesión
              </button>
            </div>
          </form>
        </div>

        <div className="p-4 bg-white w-80 md:w-[380px] lg:w-[420px] h-full rounded-lg shadow-md">
          <form onSubmit={handleRegister}>
            <h1 className="text-center font-semibold text-xl">Regístrate</h1>

            <div className="bg-white mt-4 p-3">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                htmlFor="email"
                className="contactinput"
                id={id}
              />

              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                htmlFor="password"
                className="contactinput"
                id={id}
              />
            </div>

            <div className="w-full flex items-center justify-center p-4">
              <button
                type="submit"
                className="bg-flora-base text-white font-medium px-3 py-2 rounded-md"
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
