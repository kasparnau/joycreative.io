import Link from "next/link";
import { ReactNode } from "react";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
    href={href}
  >
    {children}
  </Link>
);

export default NavLink;
