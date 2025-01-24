import { FaHamburger } from "react-icons/fa";
import { IndexNavItem } from "./IndexNavbarItem";
import classes from "./IndexNavbar.module.css";

export const IndexNavbar = () => {
  return (
    <div className="absolute z-10 w-screen px-6 py-4">
      <div className="z-10 hidden w-full flex-row flex-wrap items-center justify-center gap-4 md:flex">
        <IndexNavItem href="/#our-mission" label="Our Mission" />
        <IndexNavItem href="/program" label="Our Program" />
        <IndexNavItem href="/success" label="Program Success" />
        <IndexNavItem href="/startup-campaign" label="Start Up Campaign" />
        <IndexNavItem href="/get-involved" label="Get Involved" />
        <IndexNavItem href="/about" label="About Us" />
        <IndexNavItem href="/donate" label="Donate" />
      </div>
      <div className="z-10 flex w-full flex-row md:hidden">
        <div className="grow" />
        <div>
          <FaHamburger className={classes.xMenuButton} />
        </div>
      </div>
      <div className="collapsed md:hidden" id={classes.xSidebar}>
        <IndexNavItem href="/#our-mission" label="Our Mission" />
        <IndexNavItem href="/program" label="Our Program" />
        <IndexNavItem href="/success" label="Program Success" />
        <IndexNavItem href="/startup-campaign" label="Start Up Campaign" />
        <IndexNavItem href="/get-involved" label="Get Involved" />
        <IndexNavItem href="/about" label="About Us" />
        <IndexNavItem href="/donate" label="Donate" />
      </div>
    </div>
  );
};
