import HomePage from "@containers/HomePage";
import PeoplePage from "@containers/PeoplePage";
import PersonPage from "@containers/PersonPage";
import FavoritePage from "@containers/FavoritePage";
import SearchPage from "@containers/SearchPage";
import NotFoundPage from "@containers/NotFoundPage";
import ErrorMessage from "@components/ErrorMessage";

const routesConfig = [
  {
    path: "/",
    exact: true,
    element: HomePage,
  },
  {
    path: "/people",
    exact: true,
    element: PeoplePage,
  },
  {
    path: "/people/:id",
    exact: true,
    element: PersonPage,
  },
  {
    path: "/not-found",
    exact: true,
    element: NotFoundPage,
  },
  {
    path: "/favorite",
    exact: true,
    element: FavoritePage,
  },
  {
    path: "/search",
    exact: true,
    element: SearchPage,
  },
  {
    path: "/fail",
    exact: true,
    element: ErrorMessage,
  },
  {
    path: "*",
    exact: false,
    element: NotFoundPage,
  },
];

export default routesConfig;
