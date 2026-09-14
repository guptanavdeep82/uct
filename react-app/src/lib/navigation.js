"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";

export { useParams, usePathname, useRouter } from "next/navigation";

export function Link({ to, href, ...props }) {
  return <NextLink href={href ?? to ?? "/"} {...props} />;
}

export function NavLink({ to, href, className, end, children, ...props }) {
  const pathname = usePathname() || "/";
  const url = href ?? to ?? "/";
  const target = String(url).replace(/\/$/, "") || "/";
  const current = pathname.replace(/\/$/, "") || "/";
  const isActive = end ? current === target : current === target || (target !== "/" && current.startsWith(`${target}/`));
  const resolved = typeof className === "function" ? className({ isActive }) : className;
  return (
    <NextLink href={url} className={resolved} {...props}>
      {children}
    </NextLink>
  );
}

export function useLocation() {
  const pathname = usePathname() || "/";
  return { pathname };
}

export default Link;
