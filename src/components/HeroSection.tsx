import { BiSearch } from "react-icons/bi";
import { BiPlay } from "react-icons/bi";
import imdb from "../assets/imdb.svg";
import useFetch from "@/hooks/UseFetch";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import logo from "../assets/reel.png";
import { Link, useNavigate } from "react-router-dom";
import { useSearch } from "@/context/Search";

type Props = {
  // sectionTitle: string;
  url: string;
  // start?: number;
  // end?: number;
  // genreId?: number;
};

const HeroSection: React.FC<Props> = ({ url }) => {
  const { apiList } = useFetch(url);
  const navigate = useNavigate();
  // const [searchQuery, setSearchQuery] = useState("");
  const { searchQuery, setSearchQuery } = useSearch();
  const plugin = useRef(Autoplay({ delay: 2000 }));
  console.log(apiList);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    navigate("/search");
    console.log(searchQuery);
  };
  return (
    <>
      {/* {apiList.map((item) => (
        <div key={item.id}>
        </div>
        ))} */}
      <div className=" absolute text-white z-10 w-full top-[20%] left-1/2 flex justify-center translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-4xl font-bold">Blink Search</h2>
          <div className="searchBox">
            <input
              className="searchInput"
              type="text"
              name=""
              value={searchQuery || ""}
              onChange={handleSearchInputChange}
              placeholder="Search something"
            />
            <button
              title="search"
              className="searchButton"
              onClick={handleSearch}
            >
              <BiSearch className="w-7 h-7 translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-0 flex justify-between items-center text-white w-full left-0 z-10 px-6 py-6">
        <div className="flex gap-1 items-center">
          <h3 className="font-black text-3xl tracking-wide">Blink</h3>
          <img src={logo} className="w-16 h-16" alt="Blink-Movie-Icon" />
        </div>
        <ul className="flex gap-8 text-xl">
          <Link to={"/"} className="border-b-4 border-pink-700">
            Home
          </Link>
          <Link to={"/genres"}>Genre</Link>
          <Link to={"/movies"}>Movie</Link>
          <Link to={"/"}>TV Series</Link>
          <Link to={"/"}>About</Link>
        </ul>
      </div>
      <div className="flex absolute bottom-0 z-10 w-full">
        <Carousel className="w-10/12 ms-20">
          <CarouselContent>
            {apiList.map((item) => (
              <CarouselItem key={item.id} className="basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-auto items-center justify-center p-0">
                      <span className="text-4xl font-semibold">
                        <img
                          src={
                            "https://image.tmdb.org/t/p/w500" +
                            item.backdrop_path
                          }
                          alt={item.title}
                          className="w-full object-fill h-full rounded-lg"
                        />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Carousel
        plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="p-0 m-0"
      >
        <CarouselContent>
          {apiList.map((item) => (
            <CarouselItem key={item.id} className=" p-0 m-0">
              <div className="">
                <Card>
                  <CardContent className="flex h-screen w-full p-0 text-white items-center justify-center relative">
                    <div className="bg-black/60 absolute inset-0"></div>
                    <div className="absolute left-10 bottom-[30%] w-[70%]">
                      <h1 className="font-black text-7xl py-6">{item.title}</h1>
                      <p className="max-w-2xl">
                        {item.overview.length > 200 ? (
                          <>
                            {item.overview.slice(0, 200)}
                            <span className="text-pink-500 cursor-pointer">
                              {" "}
                              show more
                            </span>
                          </>
                        ) : (
                          item.overview
                        )}
                      </p>
                      <div className="py-2 flex items-center gap-2">
                        <img src={imdb} alt="imdb" className="w-10 h-10" />
                        {item.vote_average}({item.vote_count})
                        <div>
                          <p>{item.release_date}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button variant={"outline"}>Watch Trailer</Button>
                        <Button className="bg-pink-700 flex gap-1 items-center">
                          <BiPlay className="w-6 h-6" />
                          Watch Now
                        </Button>
                      </div>
                    </div>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" + item.backdrop_path
                      }
                      alt={item.title}
                      className="w-full object-fill h-full"
                    />
                    <span className="text-4xl font-semibold">{item.name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default HeroSection;
