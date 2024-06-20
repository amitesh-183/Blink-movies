import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import Search from "./pages/Search";
import Genres from "./pages/Genres";
import Community from "./pages/Community";
import Upload from "./pages/Upload";
import Analytics from "./pages/Analytics";
import Movies from "./pages/Movies";
import "./App.css";
import Player from "./components/Player";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/genres",
    element: <Genres />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/player/:playerId",
    element: <Player />,
  },
  // {
  //   path: "/tv",
  //   element: <TvSeries />,
  // },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
