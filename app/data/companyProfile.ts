export type KeyStat = {
  label: string;
  value: string;
  note?: string;
};

export type SimpleItem = {
  title: string;
  description?: string;
  icon?: string;
};

export const companyProfile = {
  name: "QStitch, Inc.",
  year: "2025",
  taglineLines: [
    "Built with purpose.",
    "Driven by people.",
    "Focused on quality.",
  ],
  hero: {
    headline: "Built with Purpose. Driven by People. Focused on Quality.",
    subtext:
      "QStitch, Inc. is a duly licensed organization that values quality, innovation, total customer satisfaction, and adaptability to the needs of its clients.",
  },
  about: {
    established: "July 8, 2020",
    location: "Cabuyao, Laguna",
    paragraph:
      "QStitch, Inc. is a duly licensed garments manufacturing company established on July 8, 2020 and based in Laguna, Philippines. Founded during the height of the pandemic, the company was built with a clear purpose: to deliver quality workmanship, operational reliability, and long-term value to its clients. QStitch specializes in sewing and production services, supported by skilled manpower, modern equipment, and a strong commitment to customer satisfaction and adaptability to client requirements.",
    longStory:
      "QStitch, Inc. was founded during the height of the pandemic, following the closure of Hanes where the company owner was previously employed. Facing uncertainty, she was inspired to start her own garment factory after hearing concerns from skilled sewers about the difficulty of finding work in that period. This became the driving force behind building a company that values people, quality, and resilience. What began with a small group has since grown into a strong, capable team made up of supervisors, line leaders, quality control personnel, sewers, trimmers, and mechanics. The experience of starting from the ground up shaped the company’s vision, mission, and core values, grounded in the belief that professionalism, reliability, and integrity are essential not only in business, but in supporting one another. This foundation continues to guide QStitch as it moves forward — focused on growth, continuous improvement, and long-term partnerships.",
  },
  vision:
    "To be recognized as a trusted and preferred service provider in the garments manufacturing sector — known for our commitment to people, quality, and continuous improvement.",
  mission:
    "To deliver reliable and professional subcontracting services that consistently exceed client expectations, while building the success of our in-house brand, MIX. Guided by our values, we aim to create lasting partnerships and set a standard of quality that earns trust across the garment manufacturing industry.",
  coreValues: [
    { title: "Professionalism", icon: "bx:badge-check" },
    { title: "Reliability", icon: "bx:timer" },
    { title: "Excellence", icon: "bx:award" },
    { title: "Integrity", icon: "bx:shield" },
    { title: "Competence", icon: "bx:brain" },
  ] satisfies SimpleItem[],
  keyStats: [
    { label: "Machines", value: "224", note: "units (good running condition)" },
    { label: "Employees", value: "207", note: "total headcount" },
    { label: "Established", value: "2020", note: "July 8" },
  ] satisfies KeyStat[],
  machines: [
    { title: "Single Needle", description: "128 units" },
    { title: "Zigzag", description: "30 units" },
    { title: "Cover Stitch", description: "20 units" },
    { title: "Bartack Machine", description: "15 units" },
    { title: "Double Needle", description: "12 units" },
    { title: "Over Locked", description: "12 units" },
    { title: "Gathering", description: "3 units" },
    { title: "Metering Device", description: "2 units" },
    { title: "Button Hole", description: "1 unit" },
    { title: "Button Sew", description: "1 unit" },
  ] satisfies SimpleItem[],
  team: [
    {
      title: "Management Team (incl. Production Supervisors & Line Leaders)",
      description: "11",
    },
    { title: "Cutter", description: "1" },
    { title: "Sewers", description: "155" },
    { title: "Manual Operators", description: "17" },
    { title: "Mechanic", description: "3" },
    { title: "Quality Control", description: "12" },
    { title: "MIX and QSS", description: "8" },
  ] satisfies SimpleItem[],
  services: [
    {
      title: "Subcontracting",
      description:
        "Reliable sewing and production support for partners — focused on quality, consistency, and on-time delivery.",
      icon: "bx:buildings",
    },
    {
      title: "Special Project",
      description:
        "Short-run or complex requirements handled by an experienced production and mechanics team.",
      icon: "bx:rocket",
    },
    {
      title: "B2B Selling",
      description:
        "Wholesale and business supply partnerships for garments and uniforms.",
      icon: "bx:briefcase",
    },
    {
      title: "Brand Development",
      description:
        "In-house product direction and brand-building under QStitch.",
      icon: "bx:palette",
    },
    {
      title: "B2C Selling",
      description:
        "Direct-to-consumer offerings through our brand and channels.",
      icon: "bx:store",
    },
    {
      title: "Online Marketing",
      description:
        "Digital presence and marketplace enablement to support demand and growth.",
      icon: "bx:globe",
    },
  ] satisfies SimpleItem[],
  brand: {
    name: "MIX Clothing",
    description:
      "MIX Apparel is a brand under QStitch, Inc., built on strong subcontracting partnerships and a focus on premium inner and outer apparel, plus custom office and school uniforms.",
  },
  gallery: {
    title: "Creations",
    description:
      "We are capable of sewing different varieties of fabrics and styles depending on customer requirements and market demands.",
  },
} as const;
