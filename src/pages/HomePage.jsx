import React from "react";
import Header from "./../Component/header";
import LandingView from "../Component/landing-view";
import InfoContainer from "../Component/info-container";
import Button from "../Component/button";
import image1 from "./../assets/bpst.svg";
import image2 from "./../assets/checkupto.svg";
import image3 from "./../assets/howto.svg";
import image4 from "./../assets/whatare.svg";
import InfoContainer2 from "../Component/info-container2";
import StepsViews from "../Component/steps-view";
import StatsView from "../Component/stats-view";
import FAQView from "../Component/faq-view";
import Footer from "../Component/footer";

export default function HomePage() {
  return (
    <div className="w-full">
      <Header />

      <LandingView />

      <InfoContainer
        heading={"BULK PAGE"}
        headingColor={"SPEED TESTING"}
        image={image1}
      >
        <span className="font-bold">Check Your Core Web Vitals and More</span>
        <p>
          Most tools on the internet today check either your page speed or your
          core web vitals. And most of them do it one page at a time. Not Orbit
          Local
        </p>
        <p className="text-primaryLight my-6">- our tool saves you time.</p>
        <Button>INITIATE NOW</Button>
      </InfoContainer>

      <InfoContainer
        heading={"CHECK UP TO"}
        headingColor={"500 PAGES AT ONCE"}
        image={image2}
        flipImage={true}
      >
        <div className="space-y-4">
          <p>
            Google recently introduced three metrics, collectively known as Core
            Web Vitals, to the ranking algorithm. These metrics measure the user
            experience, which Google considers essential to a high-ranking
            website. Ignoring page speed and Core Web Vitals can harm your
            search engine optimization (SEO) efforts.
          </p>
          <p>
            Orbit Local’s free tool not only measures your website’s Core Web
            Vitals but also your page speed insights, which is crucial to a
            positive user experience. Our tool makes it easy for you to measure
            your entire website at one time - up to 500 pages in a single
            search.
          </p>
        </div>
      </InfoContainer>

      <InfoContainer2 heading={"WHY USE"} headingColor={"A TOOL LIKE THIS?"}>
        <p>
          Using Orbit Local's Core Web Vitals check helps you determine which
          pages on your site need the most work. It can spot slow pages that
          you'd not be able to find with other tools unless you check each URL
          one at a time. As a bonus, you're also running the Google page speed
          test at the same time, so you make sure your pages load fast. You can
          also use this tool to compare your website to your competitors.
        </p>
      </InfoContainer2>

      <InfoContainer
        heading={"HOW TO"}
        headingColor={"USE THIS TOOL"}
        image={image3}
        flipImage={true}
      >
        <div className="space-y-4">
          <p>
            The Orbit Local bulk page speed test and Core Web Vitals tool has
            three different modes to choose from. You can test with mobile or
            desktop. As Google is now a mobile-first index, we recommend using
            mobile to get a more accurate look at how the search engines view
            your site.
          </p>
        </div>
      </InfoContainer>

      {/*  */}

      <StepsViews />

      {/*  */}

      <InfoContainer
        heading={"WHAT ARE"}
        headingColor={"GOOGLE CORE WEB VITALS?"}
        image={image4}
      >
        <div className="space-y-4">
          <p>
            Web vitals is a Google initiative to ensure that quality signals are
            universal and understood by all. Google wants to provide a quality
            user experience for everyone on the web and believes that site
            owners shouldn’t need to be “performance gurus” to understand the
            quality of experience they’re delivering to website visitors. ‘
          </p>
          <p>
            Each of the Core Web Vitals represents a unique piece of the user
            experience, is measurable, and reflects real-world experience. The
            Core Web Vitals are expected to evolve over time, but the first
            three, introduced in 2020, focus on loading, interactivity, and
            visual stability. They’re integrated across all of Google’s tools,
            including PageSpeed Insights, Google Search Console, and Google
            Analytics.
          </p>
        </div>
      </InfoContainer>

      {/*  */}

      <StatsView />
      {/*  */}

      <FAQView />
      {/*  */}

      <Footer />
    </div>
  );
}
