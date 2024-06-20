import Header from "@/components/Header";
import Main from "@/components/Main";
import { GenreContext } from "@/context/Genre";
import { useContext } from "react";

const Movies = () => {
  const { genres } = useContext(GenreContext);
  return (
    <div>
      <Header />
      <Main
        sectionTitle={"Movies"}
        url={`/discover/movie`}
        genreId={genres !== null ? genres : undefined}
        start={0}
      />
    </div>
  );
};

export default Movies;
