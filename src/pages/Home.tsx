// import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import QuickSearch from "@/components/QuickSearch";

export function Home() {
  return (
    <>
      <QuickSearch />
      <div className="grid min-h-screen w-full md:grid-cols-auto">
        <HeroSection url={"/movie/upcoming"} />
        {/* <Sidebar /> */}
        {/* <div className="flex flex-col w-full">
          <Header />
          <Main
            sectionTitle={"Popular Movies"}
            url={"/movie/popular"}
            start={0}
            end={7}
          />
          <Main
            sectionTitle={"Top Rated Movies"}
            url={"/movie/top_rated"}
            start={0}
            end={7}
          />
          <Main
            sectionTitle={"Upcoming Movies"}
            url={"/movie/upcoming"}
            start={0}
            end={7}
          />
          <Main
            sectionTitle={"Latest Tv Shows"}
            url={"/discover/tv"}
            start={0}
            end={7}
          />
        </div> */}
      </div>
    </>
  );
}
