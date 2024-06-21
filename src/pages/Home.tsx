// import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularMovies from "@/components/Home/PopularMovies";
import Tv from "@/components/Home/Tv";

export function Home() {
  return (
    <>
      {/* <QuickSearch /> */}
      <Header extraClasses="fixed top-0 border-b-0 z-20 bg-background backdrop-blur-sm" />
      <div className="grid min-h-screen w-full md:grid-cols-auto">
        <HeroSection url={"/movie/upcoming"} />
      </div>
      {/* Popular movie list */}
      <PopularMovies />
      <Tv />
      <Footer />
    </>
  );
}
