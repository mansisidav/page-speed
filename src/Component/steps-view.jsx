import im1 from "./../assets/icons/crawlwebiste.svg";
import im2 from "./../assets/icons/urllist.svg";
import im3 from "./../assets/icons/keyword.svg";

export default function StepsViews() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card heading={"Crawl Website"} count="1" image={im1}>
        Enter the starting URL. The tool crawls your website for up to 60
        seconds, to find up to 500 URLs.
      </Card>
      <Card heading={"URL List"} count="2" image={im2}>
        Enter a list of URLs for the tool to check. The tool checks page speed
        and core web vitals.
      </Card>
      <Card heading={"Keyword"} count="3" image={im3}>
        Enter your chosen keyword. The tool will pull the top 50 results from
        Google.com. Then, it will display the core web vitals and Google speed
        insights for each URL. The SERP feature is useful to see how your page
        stacks up against the competition in terms of speed, so you can decide
        if you need to fix something ASAP. You can export a CSV file of your
        results for tracking your progress over time.
      </Card>
    </div>
  );
}

function Card({ children, heading, count, image }) {
  return (
    <div className="p-4">
      <div
        className="
      absolute bg-primaryLight
      text-white md:w-[100px] md:h-[100px]
      w-[80px] h-[80px]
      md:rounded-2xl rounded-xl text-4xl md:text-6xl font-bold
      flex items-center justify-center
      pb-2 z-10 mt-4
      "
      >
        {count}
      </div>
      <div
        className="bg-white rounded-xl
      drop-shadow-4xl p-8 md:ml-[60px] ml-[30px]
      "
      >
        <div
          className="
            pl-8
        w-full flex md:items-center flex-col md:flex-row
            space-y-2 md:space-y-0
        "
        >
          <img className="w-[80px]" src={image} alt="" />
          <h1 className="md:px-8 min-w-[250px]  font-bold text-4xl">
            {heading}
          </h1>
          <p
            className="border-primary 
          md:border-l-[3px] border-t-[3px]
          md:border-t-0
          md:px-6 md:py-1 py-4"
          >
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
