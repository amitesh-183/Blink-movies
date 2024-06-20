import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import {
  Bell,
  ChevronDown,
  CircleUser,
  Film,
  Home,
  LineChart,
  Menu,
  Moon,
  ShoppingCart,
  Sun,
  Users,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../favicon-32x32.png";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "@/context/ThemeProvider";
import { useState } from "react";
import { useGenres } from "@/context/Genre";
// import useFetch from "@/hooks/UseFetch";
import useGenre from "@/hooks/useGenre";
// import { useEffect } from "react";

interface Genre {
  id: number;
  name: string;
}

const Header = () => {
  const { setTheme } = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [genreName, setGenreName] = useState<string | undefined>(undefined);
  const { genres, setGenres } = useGenres();
  const { apiList } = useGenre("/genre/movie/list?language=en");

  const onGenreChange = (value: string) => {
    const genreId = Number(value);
    setGenres(genreId);
    const selectedGenre = apiList?.find(
      (genre: Genre) => genre.id === genreId
    )?.name;
    setGenreName(selectedGenre);
    navigate("/movies");
  };
  // console.log(genres);
  return (
    <>
      <header className="flex h-14 items-center justify-between gap-4 px-4 lg:h-[60px] lg:px-6 z-10">
        <div>
          <img src={logo} className="w-30 h-30" alt="Wink" />
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="shrink-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                to="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <img src={logo} alt="blink" className="h-10 w-10" />
                <span className="sr-only">Wink</span>
              </Link>
              <Link
                to="/"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname.endsWith("/")
                    ? "text-primary bg-muted"
                    : "text-muted-foreground"
                } transition-all hover:text-primary`}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                to="/genres"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname.includes("genres")
                    ? "text-primary bg-muted"
                    : "text-muted-foreground"
                } transition-all hover:text-primary`}
              >
                <ShoppingCart className="h-4 w-4" />
                Genres
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                to="/upload"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname.includes("upload")
                    ? "text-primary bg-muted"
                    : "text-muted-foreground"
                } transition-all hover:text-primary`}
              >
                <Film className="h-4 w-4" />
                Your Movie{" "}
              </Link>
              <Link
                to="/community"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname.includes("community")
                    ? "text-primary bg-muted"
                    : "text-muted-foreground"
                } transition-all hover:text-primary`}
              >
                <Users className="h-4 w-4" />
                Community
              </Link>
              <Link
                to="/analytics"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  pathname.includes("analytics")
                    ? "text-primary bg-muted"
                    : "text-muted-foreground"
                } transition-all hover:text-primary`}
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        {/* <div className="flex justify-between items-center w-full"> */}
        <div className="sm:flex hidden gap-4 items-center">
          <Link to="/" className="text-lg font-semibold">
            Home
          </Link>
          <Link to="/movies" className="text-lg font-semibold">
            Movies
          </Link>
          <Link to="/tv" className="text-lg font-semibold">
            Tv Shows
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-lg font-semibold">
                {genreName || "Genres"} <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={genres?.toString()}
                onValueChange={onGenreChange}
              >
                {apiList.map((genre) => (
                  <DropdownMenuRadioItem
                    key={genre.id}
                    value={genre.id.toString()}
                  >
                    <span>{genre.name}</span>
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
              {/* <DropdownMenuSeparator /> */}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="#" className="text-lg font-semibold">
            Community
          </Link>
          {/* <div className="flex items-center gap-4"> */}
          <Button variant="outline" size="icon" className="ml-auto h-8 w-12">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-10" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* </div> */}
        </div>
        {/* </div> */}
      </header>
    </>
  );
};

export default Header;
