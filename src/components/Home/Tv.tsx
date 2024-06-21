import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { useNavigate } from "react-router-dom";
import useFetch from "@/hooks/UseFetch";

const Tv = () => {
  const navigate = useNavigate();
  const { apiList } = useFetch("/tv/popular");
  return (
    <div>
      {/*  */}
      <div className="flex flex-col py-8">
        <h4 className="px-28 font-bold text-2xl translate-y-7">
          Popular Tv Shows
        </h4>
        <Carousel className="max-w-7xl mx-auto">
          <CarouselContent className="pt-10">
            {apiList.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-1/7 hover:scale-105 duration-300 ease-in-out"
              >
                <div className="p-1">
                  <Card
                    onClick={() => navigate(`/tv-info/${item.id}`)}
                    className="cursor-pointer rounded-none border-none"
                  >
                    <CardContent className="flex aspect-auto items-center justify-center p-0">
                      <span className="text-4xl font-semibold">
                        <img
                          src={
                            "https://image.tmdb.org/t/p/original" +
                            item.poster_path
                          }
                          alt={item.title}
                          className="w-full object-cover h-[210px]"
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
      {/*  */}
    </div>
  );
};

export default Tv;
