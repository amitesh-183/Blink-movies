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
import { useNavigate } from "react-router-dom";
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
  const searchRef = useRef(null);
  // const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useSearch();
  const plugin = useRef(Autoplay({ delay: 2000 }));
  // console.log(apiList);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/search/${searchQuery}`);
    console.log(searchQuery);
  };

  const handleSearchPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div className=" absolute text-white z-10 w-full top-[16%] left-1/2 flex justify-center translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-3xl font-bold">Blink Search</h2>
          <div className="searchBox">
            <input
              className="searchInput"
              type="text"
              name=""
              value={searchQuery || ""}
              onChange={handleSearchInputChange}
              placeholder="Search something"
              onKeyUp={handleSearchPress}
            />
            <button
              type="submit"
              title="search"
              ref={searchRef}
              className="searchButton"
              onClick={handleSearch}
            >
              <BiSearch className="w-7 h-7 translate-x-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex absolute bottom-2 right-4 z-10">
        <Carousel className="max-w-4xl ms-auto">
          <CarouselContent className="pt-10">
            {apiList.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-1/5 hover:scale-105 z-30 duration-300 ease-in-out"
              >
                <div className="p-1">
                  <Card
                    onClick={() => navigate(`/movie-info/${item.id}`)}
                    className="cursor-pointer rounded-none"
                  >
                    <CardContent className="flex aspect-auto items-center justify-center p-0">
                      <span className="text-4xl font-semibold">
                        <img
                          src={
                            "https://image.tmdb.org/t/p/original" +
                            item.poster_path
                          }
                          alt={item.title}
                          className="w-full h-full"
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
            <CarouselItem key={item.id} className=" p-0 m-0 border-0">
              <div className="">
                <Card>
                  <CardContent className="flex h-screen w-full p-0 text-white items-center justify-center relative">
                    <div className="bg-black/30 absolute inset-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
                    <div className="absolute left-20 bottom-[20%] w-[70%]">
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
                        "https://image.tmdb.org/t/p/original" +
                        item.backdrop_path
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
