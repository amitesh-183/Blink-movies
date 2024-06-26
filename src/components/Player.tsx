import { useLocation, useParams } from "react-router-dom";

const Player = () => {
  const { playerId } = useParams();
  const { pathname } = useLocation();
  const movieUrl = `https://vidsrc.xyz/embed/${
    pathname.includes("/tv") ? "tv" : "movie"
  }/${playerId}`;
  return (
    <div>
      <iframe
        src={movieUrl}
        className="w-full h-screen"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
