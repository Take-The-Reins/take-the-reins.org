import clsx from "clsx";
import { AnchorHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  primary?: boolean;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
};

export const NavbarLink = ({
  children,
  href,
  primary = false,
  target = "_self",
}: Props) => {
  return (
    <a
      className={clsx("px-4 py-2 transition", {
        "rounded-xl border border-orange-900 hover:border-orange-200 hover:bg-orange-200 hover:shadow-xl":
          primary,
      })}
      href={href}
      target={target}
    >
      <span
        className={clsx("font-semibold text-orange-900 transition", {
          "hover:text-orange-700": !primary,
        })}
      >
        {children}
      </span>
    </a>
  );
};
