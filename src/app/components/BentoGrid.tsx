import HeroCard from "./HeroCard";
import ProjectsCard from "./ProjectsCard";
import StackCard from "./StackCard";
import BackendCard from "./BackendCard";
import OpenSourceCard from "./OpenSourceCard";
import ContactCard from "./ContactCard";
import SettingsCard from "./SettingsCard";
import WorkFocusCard from "./WorkFocusCard";

export default function BentoGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[170px] lg:grid-cols-4 lg:auto-rows-[165px]">
        <HeroCard />
        <ProjectsCard />
        <BackendCard />
        <StackCard />
        <OpenSourceCard />
        <WorkFocusCard />
        <ContactCard />
        <SettingsCard />
      </div>
    </section>
  );
}
