import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";
import userContext from "./utils/userContext";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On-Demand Loading
// Dynamic Import


const AppLayout = () => {

  const [user, setUser] = useState({
    name: "Ajit Singh",
    email: "ajsingh1622@gmail.com",
  })

  return (
    <userContext.Provider value={{user: user, setUser: setUser,}}>
      <Header />
      <Outlet/>
      <Footer />
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <Suspense>
          <About/>
        </Suspense>,
        children: [
          {
            path: "profile",
            element: <Profile/>,
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>,
      },
      {
        path: "/instamart",
        element:
        <Suspense fallback = {<Shimmer/>}>
          <Instamart/>
        </Suspense>,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);