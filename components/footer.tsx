import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-screen dark:bg-black/10 border-t h-full bg-white">
      <div className="py-10 px-4 sm:px-6 md:px-60">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="font-bold text-3xl mb-2">
              <a href="/">Simplify CRM</a>
            </h2>
            <p className="text-sm">
              Centrate en hacer <span className="font-bold">crecer</span> tu
              empresa.
            </p>
            <p className="text-sm mt-2 mb-2">© 2024 Simplify CRM</p>
            <div className="flex space-x-4 mt-3 justify-center md:justify-start">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white hover:text-emerald-500 transition duration-300"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white hover:text-emerald-500 transition duration-300"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white hover:text-emerald-500 transition duration-300"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white hover:text-emerald-500 transition duration-300"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 md:gap-28">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-xl font-bold mb-2">Contacto</p>
              <a className="hover:text-emerald-500" href="mailto:info@simplifycrm.es">info@simplifycrm.es</a>
              <a className="hover:text-emerald-500" href="tel:+34633135787">+34 633 135 787</a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-xl font-bold mb-2">Navegación</p>
              <a className="hover:text-emerald-500" href="/#caracteristicas">Características</a>
              <a className="hover:text-emerald-500" href="/#beneficios">Beneficios</a>
              <a className="hover:text-emerald-500" href="https://docs.simplifycrm.es">Documentación</a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-xl font-bold mb-2">Legal</p>
              <a className="hover:text-emerald-500" href="/aviso-legal">Aviso legal</a>
              <a className="hover:text-emerald-500" href="/aviso-legal/#privacidad">Privacidad</a>
              <a className="hover:text-emerald-500" href="/aviso-legal/#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;