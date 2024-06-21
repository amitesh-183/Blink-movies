import Header from "@/components/Header";
import useDetails from "@/hooks/useDetails";
import { useLocation, useParams } from "react-router-dom";

const Details = () => {
  const { movieId } = useParams<{ movieId: string }>();
  console.log(movieId);
  const { pathname } = useLocation();

  const { apiList } = useDetails(
    `/${pathname.includes("/tv") ? "tv" : "movie"}/${movieId}`
  );

  console.log(apiList);

  return (
    <>
      <Header extraClasses="border-b-0" />
      <div>
        <div className="backdrop-img relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
          <div className="absolute inset-0 bg-background/30"></div>
          <img
            src={`https://image.tmdb.org/t/p/original${apiList?.backdrop_path}`}
            alt={
              pathname.includes("/tv") ? apiList?.name : apiList?.original_title
            }
            className=" 2xl:[700px] h-[560px] w-full object-cover"
          />
        </div>
        <div className="px-20 -translate-y-72 flex gap-8">
          <div className="poster-area">
            <img
              src={`https://image.tmdb.org/t/p/original${apiList?.poster_path}`}
              alt=""
              className="h-[360px] w-[260px] rounded-lg"
            />
          </div>
          <div className="details-area 2xl:max-w-4xl max-w-2xl">
            <h2 className="font-semibold text-4xl">
              {pathname.includes("/tv")
                ? apiList?.name
                : apiList?.original_title}
            </h2>
            <p className="py-3 text-xl">{apiList?.overview}</p>
            <ul className="flex items-center gap-4">
              {apiList?.genres?.map((genre: { id: number; name: string }) => (
                <li
                  key={genre.id}
                  className="bg-muted/60 border border-slate-700 px-4 py-1 rounded-xl"
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
