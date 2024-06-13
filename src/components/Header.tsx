import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import {
  Bell,
  CircleUser,
  Film,
  Home,
  LineChart,
  Menu,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../favicon-32x32.png";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import useGenre from "@/hooks/useGenre";

const Header = () => {
  const { pathname } = useLocation();
  const { apiList } = useGenre("/genre/movie/list?language=en");
  return (
    <>
      <header className="flex h-14 items-center gap-4 border-b bg-white px-4 lg:h-[60px] lg:px-6 z-10 sticky top-0">
        <Sheet>
          <SheetTrigger asChild>
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
                <img src={logo} className="h-10 w-10" />
                <span className="sr-only">Acme Inc</span>
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
            {/* <nav className="grid gap-2 text-lg font-medium">
              <Link
                to="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <img src={logo} className="h-10 w-10" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                to="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Home className="h-5 w-5" />
                Home
              </Link>
              <Link
                to="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
              >
                <ShoppingCart className="h-5 w-5" />
                Genres
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                to="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Package className="h-5 w-5" />
                Upload Movies
              </Link>
              <Link
                to="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Users className="h-5 w-5" />
                Community
              </Link>
              <Link
                to="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <LineChart className="h-5 w-5" />
                Analytics
              </Link>
            </nav> */}
          </SheetContent>
        </Sheet>
        <div className="flex justify-end items-center w-full">
          {/* <button>
            <MenuIcon className="w-6 h-6" />
          </button> */}
          <div className="sm:flex hidden gap-4 items-center">
            <Link to="#" className="text-lg font-semibold">
              Movies
            </Link>
            <Link to="#" className="text-lg font-semibold">
              Tv Shows
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg font-semibold">
                    Genres
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-3 px-2 md:grid-cols-1 overflow-auto h-[300px]">
                      {apiList.map((genre) => (
                        <li key={genre.id} className="hover:bg-muted px-4 py-1">
                          {genre.name}
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="ml-auto h-8 w-12">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
