export interface HeaderLink {
  url: string;
  label: string;
}

const headerLinks: HeaderLink[] = [
  { url: "/#achievements", label: "Achievements" },
  { url: "/#games", label: "Games" },
  { url: "/#collaborate", label: "Collaborate" },
  { url: "/contact", label: "Support" },
];

export default headerLinks;
