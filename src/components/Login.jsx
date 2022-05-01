import React, { useId } from "react";

const Login = () => {
  const id = useId();
  return (
    <form>
      <div className="p-4 flex flex-col items-center h-screen">
        <h1 className="text-2xl font-bold my-4 uppercase">Panel administrador</h1>
        <div className="bg-flora-base rounded-xl px-5 py-3 shadow-2xl w-80">
          <label htmlFor={id} className="block text-md font-bold text-flora-white">
            Correo
          </label>
          <input
            type="email"
            id={id}
            className="rounded-md shadow-md border-[1px] w-full outline-flora-base border-neutral-500/5 p-2 my-4"
          />
          <label htmlFor={id + 1} className="block text-md font-bold text-flora-white">
            Contraseña
          </label>
          <input
            type="password"
            id={id + 1}
            className="rounded-md shadow-md border-[1px] w-full outline-flora-base border-neutral-500/5 p-2 my-4"
          />
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="bg-flora-second my-3 px-4 py-2 outline-none text-flora-white font-medium rounded-lg transition-colors duration-300 hover:bg-red-700"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
