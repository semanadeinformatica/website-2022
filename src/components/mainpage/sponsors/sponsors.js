import React from "react";
import * as sponsorsStyles from "../../../styles/mainpage/sponsors.module.css";
import * as mainStyles from "../../../styles/mainpage/mainpage.module.css";
import SponsorSection, { getSponsors } from "../sponsors/sponsor-section";
import { useSponsors } from "../../hooks/sponsors-query";

const Sponsors = () => {
  const data = useSponsors();
  const mainSponsors = getSponsors(data, "main");
  const goldSponsors = getSponsors(data, "gold");
  const silverSponsors = getSponsors(data, "silver");
  const bronzeSponsors = getSponsors(data, "bronze");

  return (
    (mainSponsors.length > 0 ||
      goldSponsors.length > 0 ||
      silverSponsors.length > 0 ||
      bronzeSponsors.length > 0) && (
      <section className={sponsorsStyles.sponsorsSection}>
        <a class="anchor" id="sponsors"></a>
        <h2 className={[mainStyles.h2, sponsorsStyles.h2].join(" ")}>
          OS NOSSOS SPONSORS
          <hr
            className={[
              mainStyles.headingLine,
              sponsorsStyles.headingLine
            ].join(" ")}
          />
        </h2>

        {mainSponsors.length > 0 && (
          <div className={sponsorsStyles.mainSponsor}>
            <div className={sponsorsStyles.sponsorsType}>Main</div>
            <div className={sponsorsStyles.mainWrapper}>{mainSponsors}</div>
          </div>
        )}

        <SponsorSection sponsorData={goldSponsors} type="gold" />
        <SponsorSection sponsorData={silverSponsors} type="silver" />
        <SponsorSection sponsorData={bronzeSponsors} type="bronze" />
      </section>
    )
  );
};

export default Sponsors;
