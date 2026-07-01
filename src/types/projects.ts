export type ProjectImpact = {
  label: string;
  value: string;
};

export type ProjectData = {
  id: number;
  index: string; // "01"
  name: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
  impact?: ProjectImpact[];
  href?: string;
  repo?: string;
  accent?: string; // tailwind/hex color hint for the gradient border
};

export type ProjectAPIResponse = {
  data: ProjectData[];
};
