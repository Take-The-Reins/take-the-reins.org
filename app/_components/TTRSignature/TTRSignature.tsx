import clsx from "clsx";
import { Rouge_Script } from "next/font/google";

const rogue = Rouge_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export const TTRSignature = () => {
  return <span className={clsx("text-xl", rogue.className)}>TTR</span>;
};
