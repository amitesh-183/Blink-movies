import { useParams } from "react-router-dom";

const Player = () => {
  const { playerId } = useParams();
  const movieUrl = `https://vidsrc.xyz/embed/movie/${playerId}`;
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
