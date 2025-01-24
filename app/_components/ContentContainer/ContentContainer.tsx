import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  maxWidth?: "max-w-6xl" | "max-w-5xl" | "max-w-4xl" | "max-w-3xl";
};

export const ContentContainer = ({
  children,
  maxWidth = "max-w-4xl",
}: Props) => {
  return (
    <main
      className="flex flex-col items-center bg-stone-200 px-4 py-8"
      style={{ minHeight: "70vh" }}
    >
      <div
        className={clsx("z-0 flex flex-col items-center", {
          "max-w-6xl": maxWidth === "max-w-6xl",
          "max-w-5xl": maxWidth === "max-w-5xl",
          "max-w-4xl": maxWidth === "max-w-4xl",
          "max-w-3xl": maxWidth === "max-w-3xl",
        })}
        style={{ zIndex: 0 }}
      >
        {children}
      </div>
    </main>
  );
};
