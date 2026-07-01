import { ArrowDownToLine, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/Brands";

const Footer = () => {
  return (
    <footer className="relative mt-32 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {"// end of transmission"}
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ali Elmuzayn — designed & engineered
            with care.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground focus-ring"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground focus-ring"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@example.com"
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground focus-ring"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground focus-ring"
          >
            <ArrowDownToLine className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
