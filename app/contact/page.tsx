"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faComment,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    let error;

    if (name === "name" && !value.trim()) {
      error = "El nombre es obligatorio";
    }

    if (name === "email") {
      if (!value.trim()) {
        error = "El correo es obligatorio";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Correo inválido";
      }
    }

    if (name === "message" && !value.trim()) {
      error = "El mensaje es obligatorio";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";

    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Correo inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSending(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyux6r3VlaMb9iKel4zDVlakalWUeFBlfvvopJZo5jrvgj3pEHkH56cDuqiHyVXw0FBGQ/exec",
        {
          method: "POST",
          body: new URLSearchParams(formData),
          mode: "no-cors",
        },
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setErrors({
        form: "Error de conexión. Intenta nuevamente.",
      });
    }

    setSending(false);
  };

  return (
    <section className="py-28 px-6 flex justify-center">
      <div className="max-w-xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8"
        >
          <h1 className="text-3xl font-bold mb-3 text-center">Contacto</h1>

          <p className="text-slate-400 text-center mb-10">
            ¿Quieres hablar de un proyecto o colaboración? Escríbeme por
            WhatsApp o dejame un mensaje con tus datos para comunicarme contigo
            via Correo.
          </p>
          <div className="flex justify-center mb-10">
            <a
              href="https://wa.me/59173693355"
              target="_blank"
              className="flex items-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition shadow-lg"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />

              <span>Chatear por WhatsApp</span>
            </a>
          </div>
          {success ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-400 text-2xl"
                />
              </div>

              <p className="text-green-400 font-medium">
                Mensaje enviado correctamente
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {errors.form && (
                <p className="text-red-400 text-sm">{errors.form}</p>
              )}

              {/* NAME */}

              <div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="absolute left-3 top-3 text-slate-400"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={sending}
                    className={`w-full pl-10 p-3 rounded-lg bg-black/30 border ${
                      errors.name
                        ? "border-red-400"
                        : "border-white/10 focus:border-indigo-400"
                    } outline-none transition`}
                  />
                </div>

                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}

              <div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute left-3 top-3 text-slate-400"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Correo"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={sending}
                    className={`w-full pl-10 p-3 rounded-lg bg-black/30 border ${
                      errors.email
                        ? "border-red-400"
                        : "border-white/10 focus:border-indigo-400"
                    } outline-none transition`}
                  />
                </div>

                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* MESSAGE */}

              <div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faComment}
                    className="absolute left-3 top-3 text-slate-400"
                  />

                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={sending}
                    className={`w-full pl-10 p-3 rounded-lg bg-black/30 border resize-none ${
                      errors.message
                        ? "border-red-400"
                        : "border-white/10 focus:border-indigo-400"
                    } outline-none transition`}
                  />
                </div>

                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-indigo-600 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                {sending ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
