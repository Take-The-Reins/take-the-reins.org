import clsx from "clsx";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  color?: "normal" | "primary";
  href: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
};

export const Button = ({ children, color = "normal", href, target }: Props) => {
  return (
    <a
      className={clsx(
        "rounded-lg px-4 py-2 shadow-md transition-all hover:shadow-xl md:px-6 md:py-3",
        {
          "border border-orange-100 bg-orange-50 hover:bg-orange-100":
            color === "normal",
        },
        {
          "border border-orange-300 bg-orange-200 hover:bg-orange-300":
            color === "primary",
        },
      )}
      href={href}
      target={target}
    >
      <span className={"text-md font-semibold text-orange-950 md:text-xl"}>
        {children}
      </span>
    </a>
  );
};
