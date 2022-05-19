import React, { useState, useId, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

import { validateEmail } from "../functions/validateEmail";
import { auth } from "../firebase";
import { useUserContext } from "../context/userContext";

const Auth = () => {
  const id = useId();
  const login = useRef();
  const register = useRef();

  const { user, setUser } = useUserContext();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogout = (e) => {
    e.preventDefault();
    toast("Cerrando sesión...", {
      duration: 2000,
      icon: "⚠️",
    });
    signOut(auth);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (data.email === "" || data.password === "") {
      toast("¡Debes llenar todos los campos!", {
        type: "error",
        duration: 1000,
      });
    } else if (!validateEmail(data.email)) {
      toast("¡El email no es válido!", {
        type: "error",
        duration: 1000,
      });
    } else {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((err) => {
          toast.error("¡Error al iniciar sesión!");
        });
      login.current.reset();
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (data.email === "" || data.password === "") {
      toast("¡Debes llenar todos los campos!", {
        type: "error",
        duration: 1000,
      });
    } else if (!validateEmail(data.email)) {
      toast("¡El email no es válido!", {
        type: "error",
        duration: 1000,
      });
    } else {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((err) => {
          toast.error(err);
        });
      register.current.reset();
    }
  };

  return (
    <div className="h-[calc(100vh-80px)]">
      <Toaster />
      <div className="flex flex-col lg:flex-row lg:justify-between lg:mx-auto items-center p-10 w-full lg:w-[70%] lg:items-center">
        <div className="px-4 py-8 bg-white w-80 md:w-[380px] lg:w-[420px] h-full rounded-lg shadow-md mb-16 lg:mb-0">
          <form ref={login} onSubmit={handleLogin}>
            <h1 className="text-center font-semibold text-xl">Inicia sesión</h1>

            <div className="bg-white mt-4 p-3">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                htmlFor="email"
                name="email"
                className="contactinput"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                id={id}
              />

              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                htmlFor="password"
                name="password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
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
          {user ? (
            <div className="flex w-full items-center justify-center">
              <button
                className="bg-flora-second text-white font-medium px-3 py-2 rounded-md"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </div>
          ) : null}
        </div>

        <div className="p-4 bg-white w-80 md:w-[380px] lg:w-[420px] h-full rounded-lg shadow-md">
          <form ref={register} onSubmit={handleRegister}>
            <h1 className="text-center font-semibold text-xl">Regístrate</h1>

            <div className="bg-white mt-4 p-3">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                htmlFor="email-reg"
                name="email-reg"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="contactinput"
                id={id}
              />

              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                htmlFor="password-reg"
                name="password-reg"
                onChange={(e) => setData({ ...data, password: e.target.value })}
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
