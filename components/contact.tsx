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
import { Label } from "./ui/label";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Textarea } from "./ui/textarea";
import { GlobeDemo } from "./globe-component";
import { useToast } from "@/components/ui/use-toast";
import { Check } from "lucide-react";

const ContactForm = () => {
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
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Use data from useForm
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
      <div className="w-2/3 hidden md:block lg:block xl:block ">
        <GlobeDemo />
      </div>
      <div className="sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          ¿Tienes alguna duda? ¡Contáctanos!
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Contacta con nosotros y nuestros expertos te ayudarán a resolver tus
          dudas, respondemos en menos de 24 horas.
        </p>
        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
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
    </>
  );
};

export default ContactForm;
