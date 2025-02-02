import HomePage from "../containers/HomePage/HomePage";
import PeoplePage from "../containers/PeoplePage/PeoplePage";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";

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
    path: "*",
    exact: false,
    element: NotFoundPage,
  },
];

export default routesConfig;
