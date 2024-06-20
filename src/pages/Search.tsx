// import Header from "@/components/Header";
import Main from "@/components/Main";
import { useSearch } from "@/context/Search";
import { ChangeEvent } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      {/* <Header /> */}
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
            // onClick={handleSearch}
          >
            <BiSearch className="w-7 h-7 translate-x-1" />
          </button>
        </div>
      </div>
      <h4 className="px-10 font-semibold text-2xl">
        Search Results for : {searchQuery}
      </h4>
      <Main
        sectionTitle={`Search Results for ${searchQuery}`}
        url="/search/multi"
        searchQuery={searchQuery !== null ? searchQuery : undefined}
      />
    </>
  );
};

export default Search;
