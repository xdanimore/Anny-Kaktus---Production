import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EMAILJS_PUBLIC_KEY } from "../api";

const Contacto = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (ev) => {
    ev.preventDefault();
    if (name === "" || surname === "" || email === "" || message === "") {
      toast.error("¡Tienes que rellenar los campos!");
    } else {
      emailjs.sendForm(
        "service_z0p5mdr",
        "template_ejmobov",
        form.current,
        EMAILJS_PUBLIC_KEY
      );
      toast("¡Correo enviado!", {
        icon: "📧",
      });
      setName("");
      setSurname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="h-screen bg-neutral-100 mx-auto">
      <Toaster />
      <motion.h1
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
        }}
        className="text-center py-5 text-3xl text-flora-black font-semibold"
      >
        Contacto
      </motion.h1>
      <motion.form
        ref={form}
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1.25,
        }}
        onSubmit={sendEmail}
        className="bg-white rounded-2xl max-w-xs mx-auto py-5 h-[450px] shadow-lg md:max-w-md"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <input
            type="text"
            placeholder="Nombres"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
            autoComplete="off"
            className="contactinput"
          />
          <input
            type="text"
            placeholder="Apellidos"
            name="surname"
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            autoComplete="off"
            className="contactinput"
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            autoComplete="off"
            className="contactinput"
          />

          <textarea
            placeholder="Mensaje"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            className="mb-4 py-2 px-4 w-[260px] h-48 md:w-[320px] lg:w-[360px] border-2 border-flora-black/30 rounded-lg placeholder:text-lg outline-flora-base"
          />

          <input
            type="submit"
            value="Enviar"
            className="bg-flora-base px-10 py-3 cursor-pointer rounded-lg font-medium text-flora-white my-4 duration-300 transition-all hover:bg-green-600"
          />
        </div>
      </motion.form>
    </div>
  );
};

export default Contacto;
