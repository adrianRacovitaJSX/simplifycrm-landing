"use client";
import { DotBackgroundDemo } from "@/components/dot-background-hero";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Footer from "@/components/footer";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { companies } from "@/data";
import ContactForm from "@/components/contact";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { LuFileEdit } from "react-icons/lu";
import { AiOutlineFileDone } from "react-icons/ai";
import { Loader2 } from "lucide-react";

export default function Home() {
  return (
    <main className="relative pb-4 md:pb-10 flex flex-col items-center justify-center px-8  md:px-8 overflow-hidden antialiased">
      <DotBackgroundDemo />
      <div className="-mt-[300px] md:-mt-[400px] xl:-mt-[400px] lg:-mt-[400px] mb-72">
        <ContainerScroll>
          <Image
            src={`/dashboard-cap.png`}
            alt="simplify-crm-app"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <div
        className="h-screen -mt-80 md:-mt-96 lg:-mt-96 xl:-mt-96 items-center justify-center flex flex-col"
        id="caracteristicas"
      >
        <h2 className="text-4xl sm:text-5xl font-bold relative bg-clip-text text-[#3f3f46] dark:text-white bg-gradient-to-b from-neutral-200 to-neutral-500 md:py-8 md:px-7 lg:py-8 lg:px-7 xl:py-8 xl:px-7 text-center">
          ¿Facturas atrasadas? ¿Inventario descontrolado?
          <br className="hidden md:flex lg:flex xl:flex" />
          <span className="relative bg-clip-text text-transparent bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8] dark:from-emerald-400 dark:to-emerald-400/[0.8] ">
            {" "}
            Características{" "}
          </span>{" "}
          de Simplify CRM que te pueden ayudar.
        </h2>
        <Tabs tabs={tabs} />
      </div>
      <div
        className="h-screen mt-[550px] md:mt-52 xl:mt-52 lg:mt-52 items-center justify-center flex flex-col"
        id="beneficios"
      >
        <h2 className="text-4xl sm:text-5xl font-bold relative bg-clip-text text-[#3f3f46] dark:text-white bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 px-7 text-center">
          Más clientes satisfechos, más ventas cerradas, <br />
          más tiempo para crecer.{" "}
          <span className="relative bg-clip-text text-transparent bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8] dark:from-emerald-400 dark:to-emerald-400/[0.8] ">
            Beneficios{" "}
          </span>{" "}
          de Simplify CRM.
        </h2>
        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] mt-16">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
      <div className="xl:mt-32 md:mt-32 lg:mt-32 mt-[650px] flex flex-col items-center">
        <div className="w-screen mb-8">
        <h2 className="text-4xl sm:text-5xl font-bold relative bg-clip-text text-[#3f3f46] dark:text-white bg-gradient-to-b from-neutral-200 to-neutral-500 text-center w-auto">
          Resultados{" "}
          <span className="relative bg-clip-text text-transparent bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8] dark:from-emerald-400 dark:to-emerald-400/[0.8]">
            reales
          </span>
          : Descubre cómo Simplify CRM
          <br className="hidden md:block xl:block lg:block"/> está ayudando a empresas como la tuya.
        </h2>
        </div>
  
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="mb-10 mt-32" id="demo">
        <h2 className="text-4xl sm:text-5xl font-bold relative  bg-clip-text text-[#3f3f46] dark:text-white bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 px-7 text-center">
          ¡Contáctanos y{" "}
          <span className="relative bg-clip-text text-transparent bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8] dark:from-emerald-400 dark:to-emerald-400/[0.8]">
            simplifica{" "}
          </span>
          tu negocio hoy mismo!
          <br />
        </h2>
        <div className="flex justify-end left-0 items-end" id="contacto">
          <ContactForm />
        </div>
      </div>
      <div className="h-auto">
        <Footer />
      </div>
    </main>
  );
}

const testimonials = [
  {
    quote:
      "Soy nueva en el mundo empresarial y Simplify CRM ha sido mi mejor aliado. Me ha guiado en la gestión de mis clientes, facturas y proyectos, permitiéndome centrarme en lo que realmente importa: hacer crecer mi negocio. ¡Lo recomiendo a todos los emprendedores!",
    name: "Ana García",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Al principio, era escéptico sobre si un CRM sería útil para mi negocio de construcción. Pero Simplify CRM me ha sorprendido gratamente. Ahora puedo llevar un control preciso de mis presupuestos, gastos y proyectos, lo que me ha ayudado a tomar mejores decisiones y a aumentar mi rentabilidad.",
    name: "Carlos Martínez",
    title: "Hamlet",
  },
  {
    quote: "Como autónoma, necesitaba una herramienta que me ayudara a gestionar mis proyectos y clientes sin complicarme la vida. Simplify CRM es justo lo que buscaba. Es intuitivo, fácil de usar y me ha ahorrado muchísimo tiempo.",
    name: "Laura Sánchez",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Simplify CRM ha sido un cambio radical para mi pequeña empresa. Antes perdía horas organizando mis contactos y facturas. Ahora, todo está centralizado y puedo acceder a la información de mis clientes en cualquier momento.",
    name: "Javier López",
    title: "Pride and Prejudice",
  },
];
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black gap-1"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-700 flex-shrink-0" />
        <p className="text-sm antialiased">
          ¡No puedo creer lo fácil que es facturar con Simplify! 🤩
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-sm antialiased">
          ¿En serio? Yo sigo con mi Excel de toda la vida... 🥴
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black gap-1"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-700 flex-shrink-0" />
        <p className="text-sm antialiased">¡Deberías probarlo! 😉</p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-emerald-200 dark:bg-emerald-200 w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #50C878, #388E3C, #50C878, #2E8B57)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg">
        <div className="items-center flex justify-center bg-black bg-opacity-25 backdrop-blur-xl backdrop-filter h-full">
          <h2 className="font-bold text-2xl text-white animate-pulse flex gap-2 items-center justify-center">
            <Loader2 className="animate-spin"/>Próximamente
          </h2>
        </div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <LuFileEdit width={200} height={200} className="rounded h-10 w-10" />

        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Notas al contado
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Albaranes
        </p>
      </motion.div>
      <motion.div className="h-full relative w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <LiaFileInvoiceDollarSolid
          width={200}
          height={200}
          className="rounded h-10 w-10"
        />{" "}
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Gestiona tus facturas
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Facturación
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <AiOutlineFileDone
          width={200}
          height={200}
          className="rounded h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Cierra más ventas
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Presupuestos
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="/profileimage.png"
          alt="avatar"
          height="100"
          width="500"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          Han pasado 3 días desde que te mandé la factura, procede al pago
          cuanto antes, por favor.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">¿Qué factura?</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-emerald-200 to-green-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black w-28 gap-3"
      >
        <Image
          src="/profileimage.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500 justify-center text-center mt-3">
          🤦🏼‍♂️
        </p>
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Convierte a más clientes",
    description: (
      <span className="text-sm">
        Conoce mejor a tus clientes, personaliza tus ofertas y cierra más
        ventas.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Obten informes detallados sobre el rendimiento de tu empresa",
    description: (
      <span className="text-sm">
        Toma decisiones informadas con datos precisos.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Iris: IA para tu negocio",
    description: (
      <span className="text-sm">
        Tu propia inteligencia artificial con el contexto de tu empresa. Pide lo
        que necesites: como mejorar las ventas, reducir gastos, mejorar la
        facturación...
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Genera PDFs para todas tus gestiones",
    description: (
      <span className="text-sm">
        Crea y descarga facturas, albaranes y presupuestos en PDF con un solo
        clic.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Ahorra tiempo persiguiendo a clientes",
    description: (
      <span className="text-sm">
        Envía facturas automáticamente desde <strong>Simplify CRM</strong> y
        configura recordatorios cada X días.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

const InventarioContent = () => {
  return (
    <Image
      src="/productospage.png"
      alt="CRM-App-Image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const GastosContent = () => {
  return (
    <Image
      src="/gastos.png"
      alt="CRM-App-Image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const ClientesContent = () => {
  return (
    <Image
      src="/clientes-captura.png"
      alt="CRM-App-Image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const FacturacionContent = () => {
  return (
    <Image
      src="/crear-fact-cap.png"
      alt="CRM-App-Image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const PagoContent = () => {
  return (
    <Image
      src="/registrar pago cap.png"
      alt="CRM-App-Image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const AlbaranesContent = () => {
  return (
    <Image
      src="/albaranes.png"
      alt="CRM-App-Image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const EmpleadosContent = () => {
  return (
    <Image
      src="/empleados-cap.png"
      alt="CRM-App-Image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const tabs = [
  {
    title: "Facturacion",
    value: "facturacion",
    content: (
      <div className="flex md:flex-row xl:flex-row lg:flex-row flex-col md:justify-between lg:justify-between xl:justify-between justify-start w-full overflow-hidden relative md:h-full xl:h-full lg:h-full h-[60%] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-600 to-green-900">
        <p>Facturación</p>
        <p className="text-white text-sm items-center justify-center mt-2.5">
          Crea facturas, guardalas en PDF, envíalas por email, configura
          recordatorios de pago para tus clientes desde Simplify CRM
        </p>
        <FacturacionContent />
      </div>
    ),
  },
  {
    title: "Albaranes",
    value: "albaranes",
    content: (
      <div className="flex md:flex-row xl:flex-row lg:flex-row flex-col md:justify-between lg:justify-between xl:justify-between justify-start w-full overflow-hidden relative md:h-full xl:h-full lg:h-full h-[60%] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-600 to-green-900">
        <p>Albaranes</p>
        <p className="text-white text-sm items-center justify-center mt-2.5">
          Crea albaranes, guardalos en PDF, envíalos por email, configura
          recordatorios para tus clientes desde Simplify CRM
        </p>
        <AlbaranesContent />
      </div>
    ),
  },
  {
    title: "Inventario",
    value: "inventario",
    content: (
      <div className="flex md:flex-row xl:flex-row lg:flex-row flex-col md:justify-between lg:justify-between xl:justify-between justify-start w-full overflow-hidden relative md:h-full xl:h-full lg:h-full h-[60%] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-600 to-green-900">
        <p>Inventario</p>
        <p className="text-white text-sm items-center justify-center mt-2.5">
          Gestiona todos tus productos, stock, precios, proveedores y mucho más
          desde Simplify CRM
        </p>
        <InventarioContent />
      </div>
    ),
  },
  {
    title: "Pagos",
    value: "pagos",
    content: (
      <div className="flex md:flex-row xl:flex-row lg:flex-row flex-col md:justify-between lg:justify-between xl:justify-between justify-start w-full overflow-hidden relative md:h-full xl:h-full lg:h-full h-[60%] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-600 to-green-900">
        <p>Pagos</p>
        <p className="text-white text-sm  items-center justify-center mt-2.5">
          Registra los pagos de las facturas en Simplify CRM, ¡no dejes que
          ninguno se te olvide!
        </p>
        <PagoContent />
      </div>
    ),
  },
  {
    title: "Clientes",
    value: "clientes",
    content: (
      <div className="flex md:flex-row xl:flex-row lg:flex-row flex-col md:justify-between lg:justify-between xl:justify-between justify-start w-full overflow-hidden relative md:h-full xl:h-full lg:h-full h-[60%] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-600 to-green-900">
        <p>Clientes</p>
        <p className="text-white text-sm  items-center justify-center mt-2.5">
          Gestiona todos tus clientes y leads con Simplify CRN
        </p>
        <ClientesContent />
      </div>
    ),
  },
  {
    title: "Gastos",
    value: "gastos",
    content: (
      <div className="flex md:flex-row xl:flex-row lg:flex-row flex-col md:justify-between lg:justify-between xl:justify-between justify-start w-full overflow-hidden relative md:h-full xl:h-full lg:h-full h-[60%] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-600 to-green-900">
        <p>Gastos</p>
        <p className="text-white text-sm items-center justify-center mt-2.5">
          Controla los gastos de tu empresa, sube facturas recibidas desde
          Simplify CRM
        </p>
        <GastosContent />
      </div>
    ),
  },
  {
    title: "Empleados",
    value: "empleados",
    content: (
      <div className="flex md:flex-row xl:flex-row lg:flex-row flex-col md:justify-between lg:justify-between xl:justify-between justify-start w-full overflow-hidden relative md:h-full xl:h-full lg:h-full h-[60%] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-600 to-green-900">
        <p>Empleados</p>
        <p className="text-white text-sm items-center justify-center mt-2.5">
          Gestiona a todos tus empleados, sube sus nominas y controla sus horas
          trabajadas desde Simplify CRM
        </p>
        <EmpleadosContent />
      </div>
    ),
  },
];
