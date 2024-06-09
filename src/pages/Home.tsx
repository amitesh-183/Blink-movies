import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Main from "@/components/Main";
import QuickSearch from "@/components/QuickSearch";

export function Home() {
  return (
    <>
      <QuickSearch />
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="flex flex-col">
          <Header />
          <Main
            sectionTitle={"Popular Movies"}
            url={"/movie/popular"}
            start={0}
            end={4}
          />
          <Main
            sectionTitle={"Top Rated Movies"}
            url={"/movie/top_rated"}
            start={0}
            end={4}
          />
          <Main
            sectionTitle={"Upcoming Movies"}
            url={"/movie/upcoming"}
            start={0}
            end={4}
          />
          <Main
            sectionTitle={"Latest Tv Shows"}
            url={"/discover/tv"}
            start={0}
            end={4}
          />
        </div>
      </div>
    </>
  );
}
