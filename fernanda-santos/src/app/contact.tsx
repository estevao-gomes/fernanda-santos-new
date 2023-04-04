'use client'

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, FormEvent } from "react";
import Swal from 'sweetalert2'



export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: ""
  })

  function handleSubmitForm(event: FormEvent){
    event.preventDefault()
    console.log(formData)
    setFormData({name: "", email: "", text: ""})
    Swal.fire({
      title: "Mensagem enviada com sucesso",
      icon: 'success',
      text: 'Entrarei em contato em breve!'
    })

  }

  function handleFormInput(event: HTMLInputElement|HTMLTextAreaElement){
    const newFormData = {...formData, [event.name]:event.value}
    setFormData(newFormData)
  }

  return (
    <section id="contact" className="relative block bg-blue-900 py-24 lg:pt-0">
      <div className="container mx-auto px-4">
        <div className="-mt-48 flex flex-wrap justify-center lg:-mt-64">
          <div className="w-full px-4 lg:w-6/12">
            <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-gray-300 shadow-lg">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">Quer saber mais?</h4>
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
                      name="name"
                      type="text"
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
                      placeholder="Full Name"
                      style={{ transition: "all .15s ease" }}
                      value={formData.name}
                      onChange={(e)=>{handleFormInput(e.currentTarget)}}
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
                      type="email"
                      name="email"
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
                      placeholder="Email"
                      style={{ transition: "all .15s ease" }}
                      value={formData.email}
                      onChange={(e)=>handleFormInput(e.currentTarget)}
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
                      rows={4}
                      cols={80}
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
                      placeholder="Type a message..."
                      name="text"
                      value={formData.text}
                      onChange={(e)=>handleFormInput(e.currentTarget)}
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
              <button
                className="mr-1 mb-1 h-8 w-8 rounded-full bg-blue-400 text-white outline-none focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button
                className="mr-1 mb-1 h-8 w-8 rounded-full bg-blue-600 text-white outline-none focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button
                className="mr-1 mb-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
