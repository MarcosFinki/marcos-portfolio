"use client";

import { motion } from "framer-motion";
import {
  Database,
  Shield,
  Server,
  Code2,
  Layers,
  Rocket
} from "lucide-react";

const cards = [
  {
    title: "FullStack Architecture",
    description: "Modular backend structure with scalable frontend.",
    icon: Layers,
    className: "md:col-span-2"
  },
  {
    title: "JWT Authentication",
    description: "Secure authentication with token-based flow.",
    icon: Shield
  },
  {
    title: "MongoDB & SQL",
    description: "Experience with relational and NoSQL databases.",
    icon: Database
  },
  {
    title: "REST APIs",
    description: "Structured endpoints with validation & guards.",
    icon: Server,
    className: "md:col-span-2"
  },
  {
    title: "Production Deployment",
    description: "Apps deployed on custom VPS with Nginx.",
    icon: Rocket
  },
  {
    title: "Clean Code",
    description: "Readable, maintainable and scalable structure.",
    icon: Code2
  }
];

export default function BentoGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`
              ${card.className ?? ""}
              group relative rounded-2xl border 
              border-zinc-800 bg-zinc-900 
              dark:border-zinc-800 dark:bg-zinc-900
              light:border-zinc-200 light:bg-white
              p-6 flex flex-col justify-between
              hover:border-accent transition-all duration-300
            `}
          >
            <div>
              <card.icon className="w-6 h-6 text-accent mb-4" />
              <h3 className="text-lg font-semibold">
                {card.title}
              </h3>
              <p className="text-sm text-zinc-400 mt-2">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}