import BentoCard from "./BentoCard";
import { Mail } from "lucide-react";

export default function ContactCard() {
  return (
    <BentoCard>

      <div>
        <Mail className="w-6 h-6 text-accent mb-2" />

        <h3 className="text-lg font-semibold">
          Contact
        </h3>

        <p className="text-sm text-zinc-400 mt-2">
          Open to freelance and full-time opportunities.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm">

        <a
            href="mailto:tuemail@example.com"
            className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 hover:text-accent transition text-xs"
        >
            Email
        </a>

        <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 hover:text-accent transition text-xs"
        >
            GitHub
        </a>

        <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 hover:text-accent transition text-xs"
        >
            LinkedIn
        </a>

        </div>

    </BentoCard>
  );
}