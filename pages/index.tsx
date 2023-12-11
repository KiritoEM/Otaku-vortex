import React from "react";
import LandingNav from "@/components/landing/LandingNav";
import metaDataHelper from "@/helpers/metaDataHelper";
import PageHeading from "@/components/PageHeading";
import LandingHero from "@/components/landing/LandingHero";
import LandingRecent from "@/components/landing/LandingRecent";
import LandingActu from "@/components/landing/LandingActu";
import LandingFooter from "@/components/landing/LandingFooter";


export default function landing(): JSX.Element {
  const { metaData } = metaDataHelper();
  return (
    <section className="landing">
      {/* =============Landing MetaHeader============ */}
      <PageHeading title={metaData.metaTitle.landingTitle} />

      {/* =============navigation============ */}
      <nav className="nav">
        <LandingNav />
      </nav>

      {/* =============Body============ */}
      <main>
        <LandingHero />
        <LandingRecent />
        <LandingActu />
      </main>

      {/* =============footer============ */}
      <footer>
        <LandingFooter />
      </footer>
    </section>
  );
}
