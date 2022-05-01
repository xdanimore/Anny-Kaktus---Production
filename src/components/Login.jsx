import React, { useId } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const id = useId();
  return (
    <form>
      <div className="p-4 flex flex-col items-center h-screen">
        <h1 className="text-2xl font-bold my-4 uppercase">Panel administrador</h1>
        <div className="bg-neutral-200 border[1px] border-neutral-500 rounded-xl px-5 py-8 shadow-xl w-80">
          <label htmlFor={id} className="block text-md font-bold text-flora-black">
            Correo
          </label>
          <input
            type="email"
            id={id}
            className="rounded-md shadow-md border-2 w-full outline-flora-base border-neutral-500/5 p-2 my-4"
          />
          <label htmlFor={id + 1} className="block text-md font-bold text-flora-black">
            Contraseña
          </label>
          <input
            type="password"
            id={id + 1}
            className="rounded-md shadow-md border-2 w-full outline-flora-base border-neutral-500/5 p-2 my-4"
          />
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="bg-flora-second my-3 px-4 py-2 outline-none text-flora-white font-semibold rounded-lg transition-colors duration-300 hover:bg-red-700"
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
