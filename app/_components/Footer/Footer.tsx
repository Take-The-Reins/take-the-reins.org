import clsx from "clsx";
import Link from "next/link";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-stone-200 px-8 py-20 md:px-0">
      <div
        className={clsx(
          "mb-8 w-full border border-dashed border-t-stone-500 md:w-3/4",
          classes.xDivider,
        )}
      />
      <div className={"flex max-w-4xl flex-row gap-8 md:gap-20 lg:gap-40"}>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-stone-500">Take The Reins</span>
          <div className="flex flex-row items-center gap-2">
            <FaLocationDot color="#78716c" />
            <div className="flex flex-col items-center">
              <span className="text-sm italic text-stone-500">
                Indianapolis, IN
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FaEnvelope color="#78716c" />
            <span className="text-sm italic text-stone-500">
              contact@take-the-reins.org
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-md font-semibold text-stone-500">
            Discover More
          </span>
          <Link className="text-sm text-stone-500" href="/">
            Home
          </Link>
          <Link className="text-sm text-stone-500" href="/program">
            Our Program
          </Link>
          <Link className="text-sm text-stone-500" href="/success">
            Program Success
          </Link>
          <Link className="text-sm text-stone-500" href="/get-involved">
            Get Involved
          </Link>
          <Link className="text-sm text-stone-500" href="/donate">
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
};
