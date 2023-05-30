"use client";

import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  async function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY &&
      !!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      !!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    ) {
      try {
        const dataResult = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          event.currentTarget,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
      } catch (error: any) {
        Swal.fire({
          title: "Erro no envio da mensagem",
          icon: "error",
          text: "Por favor, tente novamente mais tarde.",
        });
      }

      setFormData({ name: "", email: "", text: "" });

      Swal.fire({
        title: "Mensagem enviada com sucesso",
        icon: "success",
        text: "Entrarei em contato em breve!",
      });
      return;
    }
    return;
  }

  function handleFormInput(event: HTMLInputElement | HTMLTextAreaElement) {
    const newFormData = { ...formData, [event.name]: event.value };
    setFormData(newFormData);
  }

  return (
    <section id="contact" className="relative block bg-blue-900 py-24 lg:pt-0">
      <div className="container mx-auto px-4">
        <div className="-mt-48 flex flex-wrap justify-center lg:-mt-64">
          <div className="w-full px-4 lg:w-6/12">
            <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-gray-300 shadow-lg">
              <div className="flex-auto p-5 lg:p-10">
                <h2 className="text-2xl font-semibold">Quer saber mais?</h2>
                <p className="mt-1 mb-4 leading-relaxed text-gray-600">
                  Envie sua mensagem, e entrarei em contato, ou me procure em
                  minhas redes sociais nos botões abaixo.
                </p>
                <form onSubmit={handleSubmitForm}>
                  <div className="relative mb-3 mt-8 w-full">
                    <label
                      className="mb-2 block text-xs font-bold uppercase text-gray-700"
                      htmlFor="full-name"
                    >
                      Nome Completo
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
                      placeholder="Full Name"
                      style={{ transition: "all .15s ease" }}
                      value={formData.name}
                      onChange={(e) => {
                        handleFormInput(e.currentTarget);
                      }}
                    />
                  </div>

                  <div className="relative mb-3 w-full">
                    <label
                      className="mb-2 block text-xs font-bold uppercase text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
                      placeholder="Email"
                      style={{ transition: "all .15s ease" }}
                      value={formData.email}
                      onChange={(e) => handleFormInput(e.currentTarget)}
                    />
                  </div>

                  <div className="relative mb-3 w-full">
                    <label
                      className="mb-2 block text-xs font-bold uppercase text-gray-700"
                      htmlFor="message"
                    >
                      Mensagem
                    </label>
                    <textarea
                      required
                      minLength={20}
                      rows={4}
                      cols={80}
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
                      placeholder="Type a message..."
                      name="text"
                      value={formData.text}
                      onChange={(e) => handleFormInput(e.currentTarget)}
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <button
                      className="mr-1 mb-1 rounded bg-gray-900 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-gray-700"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mx-auto mt-6 flex justify-center">
              <a
                href="https://www.facebook.com/profinglesfernanda"
                target="_blank"
                aria-label="visite minha página no facebook"
              >
                <button
                  aria-label="botão para levar à página do facebook"
                  className="mr-1 mb-1 h-8 w-8 rounded-full bg-blue-600 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/profinglesfernanda/"
                aria-label="Visite minha página no instagram"
              >
                <button
                  aria-label="botão para levar à página do instagra,"
                  className="mr-1 mb-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
