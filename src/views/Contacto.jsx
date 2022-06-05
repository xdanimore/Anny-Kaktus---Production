import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import { EMAILJS_PUBLIC_KEY } from "../api";
import { validateEmail } from "../functions/validateEmail";

const Contacto = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const captcha = useRef(null);

  const sendEmail = (ev) => {
    ev.preventDefault();

    if (captcha.current.getValue()) {
      console.log("not a robot");
      if (name === "" || surname === "" || email === "" || message === "") {
        toast("¡Debes llenar todos los campos!", {
          type: "error",
          duration: 1000,
        });
      } else if (!validateEmail(email)) {
        toast("¡El email no es válido!", {
          type: "error",
          duration: 1000,
        });
      } else {
        emailjs.sendForm(
          "service_uml50j3",
          "template_9mymhop",
          form.current,
          EMAILJS_PUBLIC_KEY
        );
        toast("¡Correo enviado!", {
          icon: "📧",
          duration: 1250,
        });
        captcha.current.reset();

        setName("");
        setSurname("");
        setEmail("");
        setMessage("");
      }
    } else {
      toast("¡Debes marcar el captcha!", {
        type: "error",
        duration: 1250,
      });
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Contacto</title>
        <meta charSet="utf-8" />
      </Helmet>
      <div className="min-h-screen bg-neutral-100">
        <Toaster />
        <header>
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
            className="text-center py-5 text-3xl text-black font-semibold"
          >
            Contacto
          </motion.h1>
        </header>
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
          className="bg-white rounded-2xl max-w-[350px] mx-auto px-10 py-5 h-[540px] shadow-md md:max-w-md"
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

            <ReCAPTCHA
              ref={captcha}
              sitekey="6Lf_yQggAAAAAMrO6gOezXH5hRTG7rNgOeyBIetd"
            />

            <button
              type="submit"
              className="bg-flora-base px-6 py-3 cursor-pointer rounded-lg font-medium text-flora-white my-4 duration-300 transition-all hover:bg-green-600"
            >
              Enviar
            </button>
          </div>
        </motion.form>
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.75,
              duration: 1.5,
            },
          }}
          className="flex flex-col items-center justify-center mx-auto max-w-[360px] md:max-w-xl lg:max-w-3xl bg-white rounded-xl p-4 mt-10 shadow-lg"
        >
          <motion.h1
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.25,
                delay: 1,
              },
            }}
            className="text-xl font-semibold"
          >
            Desarrollado en:
          </motion.h1>
          <img
            src="https://web.udi.edu.co/files/img/logo-udi-web.png"
            width={400}
            alt="Logo Universidad de Investigación y Desarrollo -UDI-"
          />
          <motion.h2 className="font-medium">Integrantes:</motion.h2>
          <ul className="text-center">
            <motion.li
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1.25,
                  delay: 1.5,
                },
              }}
            >
              <p>Andrés Rodríguez</p>
            </motion.li>
            <motion.li
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1.25,
                  delay: 1.75,
                },
              }}
            >
              <p>Nicolás Polo</p>
            </motion.li>
            <motion.li
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1.25,
                  delay: 2,
                },
              }}
            >
              <p>Alejandro Quintero</p>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </HelmetProvider>
  );
};

export default Contacto;
