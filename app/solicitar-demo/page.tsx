"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Check } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";

const SolicitarDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };

  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/demo-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "¡Recibido! Tu demo está en marcha.",
          description:
            "Nos pondremos en contacto contigo en menos de 24 horas.",
        });
        reset();
      } else {
        toast({
          title: "Error",
          description:
            "Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <WavyBackground className=" mx-auto pb-40">
        <div className="p-16 px-28 flex w-screen">
          <div className="w-2/3 flex-col flex items-start justify-center">
            <h1 className="text-4xl font-bold">
              ¡Descubre el Poder de{" "}
              <span className="relative bg-clip-text text-transparent bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8] dark:from-emerald-400 dark:to-emerald-400/[0.8] ">
                Simplify CRM
              </span>{" "}
              con una Demo Personalizada!
            </h1>
            <p className="dark:text-white text-center mb-4 mt-4 text-xl">
              ¿Estás listo para transformar la forma en que gestionas tu
              negocio?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-screen">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Con Simplify CRM, podrás:
                </h3>
                <ul className="list-disc list-inside dark:text-white">
                  <li>
                    Centralizar toda la información de tus clientes en un solo
                    lugar, accesible desde cualquier dispositivo.
                  </li>
                  <li>
                    Agilizar tu proceso de ventas y cerrar más tratos con
                    herramientas intuitivas y automatizaciones inteligentes.
                  </li>
                  <li>
                    Ofrecer un servicio al cliente excepcional y construir
                    relaciones duraderas con tus clientes.
                  </li>
                  <li>
                    Optimizar tu inventario y controlar tus gastos para tomar
                    decisiones financieras informadas.
                  </li>
                  <li>
                    Aumentar tu productividad y liberar tiempo valioso para
                    enfocarte en el crecimiento de tu negocio.
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-black">
                ¿Qué puedes esperar de nuestra demo?
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Una presentación personalizada de las características y
                  beneficios de Simplify CRM.
                </li>
                <li>
                  Ejemplos prácticos de cómo Simplify CRM puede ayudarte a
                  resolver tus desafíos empresariales.
                </li>
                <li>
                  Respuestas a todas tus preguntas y dudas sobre el software.
                </li>
                <li>
                  Asesoramiento personalizado sobre cómo sacar el máximo
                  provecho de Simplify CRM.
                </li>
              </ul>
            </div>

            <h2 className="text-lg font-bold mt-8 mb-6">
              ¡No esperes más para simplificar tu negocio y alcanzar tus
              objetivos!
            </h2>
          </div>
          <div className="w-1/3 px-10 flex-col flex items-center justify-center">
            <h2 className="font-bold text-lg text-center">
              Rellena el siguiente formulario y nos pondremos en contacto
              contigo
            </h2>
            <div>
              <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4">
                  <LabelInputContainer>
                    <Label htmlFor="firstname">Nombre y apellidos</Label>
                    <Input
                      id="firstname"
                      placeholder="Nombre"
                      type="text"
                      {...register("firstname")}
                      required
                    />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      placeholder="Tu empresa S.L."
                      type="text"
                      {...register("empresa")}
                    />
                  </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="size">Tamaño de la empresa</Label>
                  <Input
                    id="size"
                    placeholder="15 empleados"
                    type="text"
                    {...register("size")}
                    required
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="tucorreohabitual@gmail.com"
                    type="email"
                    {...register("email")}
                    required
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="tlf">Teléfono</Label>
                  <Input
                    id="tlf"
                    placeholder="+34 123456789"
                    type="number"
                    {...register("tlf")}
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                  <Label htmlFor="consulta">Consulta</Label>
                  <Textarea
                    id="consulta"
                    required
                    {...register("consulta")}
                    placeholder="Cuéntanos un poco sobre tu negocio, a que te dedicas, cuantos empleados usarán el CRM... También, puedes aprovechar y preguntar tus dudas o preguntas, no seas tímido."
                    className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400"
                  />
                </LabelInputContainer>

                <button
                  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                  &rarr;
                  <BottomGradient />
                </button>
              </form>
            </div>
          </div>
        </div>
      </WavyBackground>
    </>
  );
};

export default SolicitarDemo;
