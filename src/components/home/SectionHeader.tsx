import { cn } from "@/lib/utils";
import Reveal from "@/components/effects/Reveal";

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
};

const SectionHeader = ({
  index,
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal className="flex items-center gap-3">
        <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
          {index}
        </span>
        <span className="h-px w-8 bg-line-strong" />
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.02em] md:text-[40px]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={160}>
          <p className="max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
};

export default SectionHeader;
