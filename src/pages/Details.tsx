import { BsFillPlayFill } from "react-icons/bs";
import Header from "@/components/Header";
import useDetails from "@/hooks/useDetails";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const Details = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const navigate = useNavigate();
  // console.log(movieId);
  const { pathname } = useLocation();
  const [runtime, setRuntime] = useState("");

  const { apiList } = useDetails(
    `/${pathname.includes("/tv") ? "tv" : "movie"}/${movieId}`
  );

  console.log(apiList);

  // convert minutes into hours
  if (apiList?.runtime) {
    const hours = Math.floor(apiList?.runtime / 60);
    const minutes = apiList?.runtime % 60;
    setRuntime(`${hours}h ${minutes}m`);
  }

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
        <div className="px-20 flex gap-8">
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
            <div className="py-4">
              <p className="py-1 font-semibold">
                Release Date : {apiList?.release_date}
              </p>
              <p className="py-1 font-semibold">Time : {runtime}</p>
              <p className="py-1 font-semibold">
                Language : {apiList?.original_language == "en" ? "English" : ""}
              </p>
              <p className="py-1 font-semibold">
                Revenue : ${apiList?.revenue}
              </p>
            </div>
          </div>
        </div>
        <div className="px-20 flex gap-4 py-8">
          <button className="px-10 bg-muted/50 font-bold text-lg flex items-center gap-2 rounded-lg py-3">
            <BsFillPlayFill size={28} />
            Watch Trailer
          </button>
          <button
            className="px-10 bg-pink-600 font-bold text-lg flex items-center gap-2 rounded-lg py-3"
            onClick={() => navigate(`/player/${apiList?.id}`)}
          >
            <BsFillPlayFill size={28} />
            Watch Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
