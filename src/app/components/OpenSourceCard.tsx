import BentoCard from "./BentoCard";
import { Github } from "lucide-react";

export default function OpenSourceCard() {
  return (
    <BentoCard>

      <div>
        <Github className="w-6 h-6 text-accent mb-2" />

        <h3 className="text-lg font-semibold">
          Trackly
        </h3>

        <p className="text-sm text-zinc-400 mt-2">
          Open source installable tool available on GitHub.
        </p>
      </div>

        <a
            href="https://github.com/MarcosFinki/trackly/releases/tag/v1.0.0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:underline mt-4 inline-block"
        >
            Download →
        </a>

    </BentoCard>
  );
}