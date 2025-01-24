"use client";

import { useState } from "react";
import { ContentContainer } from "../_components/ContentContainer";
import { Footer } from "../_components/Footer/Footer";
import { Navbar } from "../_components/Navbar/Navbar";
import classes from "./page.module.css";

export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Navbar />
      <ContentContainer>
        <span className="mb-4 text-4xl font-semibold text-stone-900">
          Donations
        </span>
        <div className={classes.xDonationContainer}>
          {loading && (
            <div
              className="rounded-xl bg-zinc-100"
              style={{ minHeight: "1200px", minWidth: "400px" }}
            >
              <span className="flex flex-row justify-center pt-10 text-zinc-500">
                Loading...
              </span>
            </div>
          )}
          <iframe
            allow="payment"
            className="rounded-xl"
            onLoad={() => setLoading(false)}
            src="https://www.zeffy.com/embed/donation-form/90e0310a-7639-4281-9982-d4b0daaba5e2"
            style={{
              border: "0",
              bottom: "0",
              height: "100%",
              left: "0",
              position: "absolute",
              right: "0",
              top: "0",
              width: "100%",
            }}
            title="Donation form powered by Zeffy"
          ></iframe>
        </div>
      </ContentContainer>
      <Footer />
    </div>
  );
}
