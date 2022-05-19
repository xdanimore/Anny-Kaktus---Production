import React, { useId } from "react";

const Auth = () => {
  const id = useId();

  return (
    <div className="h-[calc(100vh-80px)]">
      <div className="flex flex-col">
        <div className="p-4 bg-neutral-300 w-80 h-full rounded-lg shadow-md">
          <h1>Inicia sesión</h1>

          <div className="bg-flora-second mt-4 p-3">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" htmlFor="email" id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
