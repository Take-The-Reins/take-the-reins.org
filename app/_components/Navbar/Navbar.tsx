import Image from "next/image";
import Link from "next/link";
import { NavbarLink } from "./NavbarLink";

export const Navbar = () => {
  return (
    <div className="flex flex-row flex-wrap items-center bg-stone-200 px-10 py-6 md:px-20">
      <Link
        className="flex flex-row flex-wrap items-center justify-center"
        href="/"
      >
        <Image
          alt="Take The Reins logo"
          height={66}
          src="/images/ttr-logo.webp"
          style={{
            borderRadius: "8px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
          width={200}
        />
      </Link>
      <div className="grow" />
      <div className="flex flex-row flex-wrap items-center justify-center">
        <NavbarLink href="/program">Our Program</NavbarLink>
        <NavbarLink href="/success">Success</NavbarLink>
        <NavbarLink href="/startup-campaign">Startup Campaign</NavbarLink>
        <NavbarLink href="/get-involved">Get Involved</NavbarLink>
        <NavbarLink href="/about">About Us</NavbarLink>
        <div className="min-w-2" />
        <NavbarLink href="/donate" primary>
          DONATE
        </NavbarLink>
      </div>
    </div>
  );
};
