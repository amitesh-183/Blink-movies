import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import useFetch from "@/hooks/UseFetch";

const Genres = () => {
  const { apiList } = useFetch("/genre/movie/list");
  console.log(apiList);
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="m-4">
          <h1 className="text-2xl font-semibold">Genres</h1>
          <ul className="flex flex-wrap gap-8 mt-4">
            {apiList?.map((genre) => (
              <li
                key={genre.id}
                className="w-[200px] border py-4 px-6 rounded-lg"
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Genres;
