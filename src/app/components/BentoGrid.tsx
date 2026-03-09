import BentoCard from "./BentoCard";
import {
  Database,
  Shield,
  Server,
  Code2,
  Layers,
  Rocket
} from "lucide-react";
import HeroCard from "./HeroCard";
import ProjectsCard from "./ProjectsCard";
import StackCard from "./StackCard";
import BackendCard from "./BackendCard";
import OpenSourceCard from "./OpenSourceCard";
import ContactCard from "./ContactCard";
import SettingsCard from "./SettingsCard";

export default function BentoGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px]">

        {/* HERO CARD */}

        <HeroCard />

        {/* PROJECTS CARD */}
        <ProjectsCard />


        {/* STACK */}
        <StackCard />


        {/* BACKEND */}
        <BackendCard />


        {/* OPEN SOURCE */}
        <OpenSourceCard />


        {/* CONTACT */}
        <ContactCard />

        {/* SETTINGS */}
        <SettingsCard />

      </div>
    </section>
  );
}