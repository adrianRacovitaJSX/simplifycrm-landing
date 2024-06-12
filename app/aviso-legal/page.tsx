"use client";
import Footer from "@/components/footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";

const AvisoLegal = () => {
  return (
    <>
      <div>
        <div className="sticky top-16 p-1 z-40 flex items-center justify-center gap-8 bg-emerald-600">
          <a className="hover:text-black text-white cursor-pointer">
            Aviso legal
          </a>
          <a className="hover:text-black text-white   cursor-pointer">
            Privacidad
          </a>
          <a className="hover:text-black  text-white  cursor-pointer">
            Cookies
          </a>
        </div>
        <TracingBeam className="px-10 h-screen">
          <div className="flex flex-col items-center justify-center py-10">
            <div className="py-10 flex flex-col">
              <h3 className="text-4xl mb-6" >Aviso legal</h3>
              <p>
                <strong>1. Datos identificativos:</strong>
              </p>
              <ul>
                <li>
                  <strong>Nombre de la empresa:</strong> Simplify CRM
                </li>
                <li>
                  <strong>Domicilio social:</strong> Calle Jorge Manrique, 20,
                  28913.
                </li>
                <li>
                  <strong>CIF/NIF:</strong> X9103032E
                </li>
                <li>
                  <strong>Correo electrónico:</strong>{" "}
                  <a href="mailto:info@simplifycrm.es">info@simplifycrm.es</a>
                </li>
              </ul>

              <p>
                <strong>2. Propiedad intelectual e industrial:</strong>
              </p>
              <p>
                El contenido de este sitio web, incluyendo textos, imágenes,
                diseño gráfico y código fuente, está protegido por derechos de
                propiedad intelectual e industrial. Queda prohibida su
                reproducción, distribución, comunicación pública y
                transformación, total o parcial, sin la autorización expresa de
                Simplify CRM.
              </p>

              <p>
                <strong>3. Responsabilidad:</strong>
              </p>
              <p>
                Simplify CRM no se hace responsable del mal uso que se realice
                de los contenidos de su sitio web, siendo exclusiva
                responsabilidad de la persona que accede a ellos o los utiliza.
              </p>

              <p>
                <strong>4. Política de enlaces:</strong>
              </p>
              <p>
                Este sitio web puede contener enlaces a páginas externas.
                [Nombre de tu empresa] no se hace responsable del contenido ni
                de las políticas de privacidad de dichas páginas.
              </p>

              <p>
                <strong>5. Ley aplicable y jurisdicción:</strong>
              </p>
              <p>
                Las presentes condiciones generales se rigen por la legislación
                española. Para la resolución de cualquier conflicto que pudiera
                derivarse de su interpretación o aplicación, las partes se
                someten a la jurisdicción de los tribunales de Madrid.
              </p>
            </div>
            <div className="py-10">
              <h3 className="text-4xl mb-6" id="privacidad">Política de privacidad</h3>
              <p>
                <strong>1. Responsable del tratamiento:</strong>
              </p>
              <ul>
                <li>
                  <strong>Nombre de la empresa:</strong> Simplify CRM
                </li>
                <li>
                  <strong>Domicilio social:</strong> Calle Jorge Manrique, 20,
                  28913.
                </li>
                <li>
                  <strong>CIF/NIF:</strong> X9103032E
                </li>
                <li>
                  <strong>Correo electrónico:</strong>{" "}
                  <a href="mailto:info@simplifycrm.es">info@simplifycrm.es</a>
                </li>
                <li>
                  <strong>Delegado de Protección de Datos (DPO):</strong>{" "}
                  [Nombre y correo electrónico del DPO, si aplica]
                </li>
              </ul>

              <p>
                <strong>2. Finalidad del tratamiento:</strong>
              </p>
              <p>
                Los datos personales recogidos a través de este sitio web se
                utilizarán para las siguientes finalidades:
              </p>
              <ul>
                <li>
                  Gestionar y responder a las solicitudes de información o
                  contacto.
                </li>
                <li>
                  Enviar comunicaciones comerciales sobre nuestros productos o
                  servicios, si el usuario ha dado su consentimiento.
                </li>
                <li>Cumplir con nuestras obligaciones legales.</li>
              </ul>

              <p>
                <strong>3. Legitimación del tratamiento:</strong>
              </p>
              <p>
                La base legal para el tratamiento de tus datos es el
                consentimiento del usuario, el cumplimiento de un contrato o el
                interés legítimo de Simplify CRM.
              </p>

              <p>
                <strong>4. Destinatarios de los datos:</strong>
              </p>
              <p>
                Los datos personales no serán cedidos a terceros, salvo
                obligación legal.
              </p>

              <p>
                <strong>5. Derechos de los usuarios:</strong>
              </p>
              <p>
                Los usuarios tienen derecho a acceder, rectificar, suprimir,
                oponerse al tratamiento y solicitar la limitación o portabilidad
                de sus datos, dirigiéndose por escrito a{" "}
                <a href="mailto:info@simplifycrm.es">info@simplifycrm.es</a>.
              </p>

              <p>
                <strong>6. Medidas de seguridad:</strong>
              </p>
              <p>
                Simplify CRM ha adoptado las medidas de seguridad necesarias
                para garantizar la confidencialidad e integridad de los datos
                personales y evitar su pérdida, alteración o acceso no
                autorizado.
              </p>
            </div>
            <div className="py-10">
              <h3 className="text-4xl mb-6" id="cookies">Política de cookies</h3>
              <p>
                <strong>1. ¿Qué son las cookies?</strong>
              </p>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en
                el dispositivo del usuario al visitar un sitio web. Se utilizan
                para mejorar la experiencia de navegación, recordar preferencias
                del usuario y obtener información sobre el uso del sitio web.
              </p>

              <p>
                <strong>2. Tipos de cookies:</strong>
              </p>
              <ul>
                <li>
                  <strong>Cookies técnicas:</strong> Son necesarias para el
                  funcionamiento básico del sitio web.
                </li>
                <li>
                  <strong>Cookies de personalización:</strong> Permiten adaptar
                  el sitio web a las preferencias del usuario.
                </li>
                <li>
                  <strong>Cookies de análisis:</strong> Recopilan información
                  sobre el uso del sitio web para mejorar su funcionamiento.
                </li>
                <li>
                  <strong>Cookies publicitarias:</strong> Muestran publicidad
                  personalizada al usuario.
                </li>
              </ul>

              <p>
                <strong>3. Cookies utilizadas en este sitio web:</strong>
              </p>
              <ul>
                [Lista de las cookies utilizadas, indicando su nombre, tipo,
                finalidad y duración]
              </ul>

              <p>
                <strong>4. Gestión de cookies:</strong>
              </p>
              <p>
                El usuario puede configurar su navegador para aceptar o rechazar
                todas las cookies o para recibir un aviso cada vez que un sitio
                web quiera guardar una cookie.
              </p>

              <p>
                <strong>5. Consentimiento:</strong>
              </p>
              <p>
                Al utilizar este sitio web, el usuario acepta el uso de cookies
                de acuerdo con esta política.
              </p>
            </div>
          </div>
        </TracingBeam>
      </div>
    </>
  );
};

export default AvisoLegal;
