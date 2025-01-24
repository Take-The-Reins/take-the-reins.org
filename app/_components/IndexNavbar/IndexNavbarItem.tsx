import clsx from "clsx";
import classes from "./IndexNavbarItem.module.css";

type Props = {
  href: string;
  label: string;
};

export const IndexNavItem = ({ href, label }: Props) => {
  return (
    <a
      className={clsx(
        "flex grow flex-row items-center justify-center rounded-xl px-2 py-1 text-lg font-semibold transition-all hover:bg-orange-100 hover:shadow-xl md:px-3 md:py-2 md:text-xl",
        classes.xContainer,
      )}
      href={href}
    >
      <p className={clsx("transition-all", classes.xText)}>{label}</p>
    </a>
  );
};
