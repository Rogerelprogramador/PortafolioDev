"use client";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Correo inválido";
    }
    if (!formData.message.trim()) newErrors.message = "El mensaje es obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  setSending(true);
  setErrors({});

  try {
    await fetch("https://script.google.com/macros/s/AKfycbyux6r3VlaMb9iKel4zDVlakalWUeFBlfvvopJZo5jrvgj3pEHkH56cDuqiHyVXw0FBGQ/exec", {
      method: "POST",
      body: new URLSearchParams(formData),
      // AÑADE ESTA LÍNEA:
      mode: "no-cors", 
    });

    // Ahora sí, esto se ejecutará sin problemas.
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });

  } catch (error) {
    // Este catch ya no debería activarse.
    console.error("Fetch Error:", error);
    setErrors({ form: "Error de conexión. Por favor, revisa tu internet." });
  }

  setSending(false);
};

  return (
    <main className="contact">
      <h1>Contacto</h1>
      <p>¿Quieres hablar de un proyecto o colaboración? Escríbeme:</p>

      {success ? (
        <div className="success-message" role="alert" aria-live="assertive">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14 27l7 7 16-16"
            />
          </svg>
          <p>Mensaje enviado con éxito</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {errors.form && <p className="error">{errors.form}</p>}

          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
            disabled={sending}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p className="error" id="name-error">
              {errors.name}
            </p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
            disabled={sending}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p className="error" id="email-error">
              {errors.email}
            </p>
          )}

          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
            disabled={sending}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          ></textarea>
          {errors.message && (
            <p className="error" id="message-error">
              {errors.message}
            </p>
          )}

          <button type="submit" disabled={sending}>
            {sending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      )}
    </main>
  );
}
