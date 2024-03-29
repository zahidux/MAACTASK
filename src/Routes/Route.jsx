import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login";
import Registration from "../Shared/Registration";
import Dashboard from "../Layout/Dashboard";
import Region from "../Pages/Dashboard/Region";
import CreateRegion from "../Pages/Dashboard/CreateRegion";
import Area from "../Pages/Dashboard/Area";
import CreateArea from "../Pages/Dashboard/CreateArea";
import RegionList from "../Pages/Dashboard/RegionList";
import AreaList from "../Pages/Dashboard/AreaList";
import P404 from "../components/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/region",
        element: <Region />,
      },
      {
        path: "/dashboard/create-region",
        element: <CreateRegion />,
      },
      {
        path: "/dashboard/area",
        element: <Area />,
      },
      {
        path: "/dashboard/create-area",
        element: <CreateArea />,
      },
      {
        path: "/dashboard/regionlist",
        element: <RegionList />,
      },
      {
        path: "/dashboard/arealist",
        element: <AreaList />,
      },
    ],
  },
  {
    path: "*",
    element: <P404 />,
  },
]);

export default router;
