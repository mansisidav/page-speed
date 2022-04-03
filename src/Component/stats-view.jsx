import React from "react";

export default function StatsView() {
  return (
    <div className="p-16 w-full max-w-6xl space-y-16 mx-auto">
      <StatCard
        title={"Largest Contentful Paint (LCP)"}
        goodLine="Occurs Within 2.5 Seconds Of When The Page First Started To Load."
        midLine="Occurs Within 2.5 And 4 Seconds ."
        badLine="Takes Longer Than 4 Seconds To Occur ."
      >
        The LCP measures loading performance. It marks the point at which the
        main content of a page is loaded. It's the time when the browser
        rendered the largest visual element on the page. The faster your overall
        loading time, the better your LCP will be.
      </StatCard>
      <StatCard
        title={"First Input Delay (FID)"}
        goodLine="Below 100 Milliseconds."
        midLine="Below 100 and 300 Milliseconds."
        badLine="Takes Longer Than 300 Milliseconds."
      >
        The FID measures load responsiveness. It measures the time from when a
        user first interacts with a page (clicks a link, taps a button, etc.) to
        the time that the browser starts responding to the interaction. The
        lower FID, the more usable your page is.
      </StatCard>
      <StatCard
        title={"Cumulative Layout Shift (CLS)"}
        goodLine="Less Than 0.1."
        midLine="Falls Between 0.1 And 0.25."
        badLine="Larger Than 0.25."
      >
        The CLS measures visual stability. It measures how often users
        experience unexpected shifts in a page's layout. Layout shifts occur any
        time visual elements on the page shift position from one frame to the
        next.
      </StatCard>

      {/*  */}

      <div className="bg-white drop-shadow-2xl px-16 py-4 rounded-xl">
        For each of these three metrics, you should measure the 75th percentile
        of page loads, segmented across both desktop and mobile devices. That
        ensures you're hitting the target for the majority of users.
      </div>
    </div>
  );
}

function StatCard({ title, children, goodLine, midLine, badLine }) {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p>{children}</p>
      {/*  */}
      <div
        className="bg-green-400 rounded-md
       py-2 px-4 text-white w-fit
      flex space-x-2
      "
      >
        <p className="font-bold">Good:</p>
        <p>{goodLine}</p>
      </div>
      <div
        className="bg-yellow-400 rounded-md
       py-2 px-4 text-white w-fit
      flex space-x-2
      "
      >
        <p className="font-bold">Needs Improvements:</p>
        <p>{midLine}</p>
      </div>
      <div
        className="bg-red-500 rounded-md
       py-2 px-4 text-white w-fit
      flex space-x-2
      "
      >
        <p className="font-bold">Poor:</p>
        <p>{badLine}</p>
      </div>
    </div>
  );
}
