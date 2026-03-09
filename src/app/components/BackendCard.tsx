import BentoCard from "./BentoCard";
import { Server } from "lucide-react";

export default function BackendCard() {
  return (
    <BentoCard className="md:row-span-2">

      <div>
        <Server className="w-6 h-6 text-accent mb-2" />

        <h3 className="text-lg font-semibold">
          Backend Architecture
        </h3>

        <p className="text-sm text-zinc-400 mt-2">
          I design structured backend systems focused on scalability
          and maintainability.
        </p>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-zinc-400">

        <li>REST APIs</li>
        <li>JWT Authentication</li>
        <li>Role-based access</li>
        <li>MongoDB & SQL</li>
        <li>Modular architecture</li>

      </ul>

    </BentoCard>
  );
}