import BentoGrid from "./BentoGrid";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center py-3 md:py-0">
      <div className="mx-auto w-full max-w-[1440px]">
        <BentoGrid />
      </div>
    </section>
  );
}
