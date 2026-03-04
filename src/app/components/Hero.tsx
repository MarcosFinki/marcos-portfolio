import BentoGrid from "./BentoGrid";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center gap-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Marcos Finkielsztajn
        </h1>

        <p className="mt-6 text-xl text-zinc-400">
          FullStack Developer building modern web applications.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-accent text-white font-medium hover:opacity-90 transition">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-accent transition">
            Contact
          </button>
        </div>
      </div>

      <BentoGrid />
    </section>
  );
}