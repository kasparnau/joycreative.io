export interface NavLink {
  url: string;
  label: string;
}

const navLinks: NavLink[] = [
  { url: "/", label: "Home" },
  { url: "/contact", label: "Support" },
];

export default navLinks;
