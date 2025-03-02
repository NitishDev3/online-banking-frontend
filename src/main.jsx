import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import LoadingPage from "./exceptionComp/LoadingPage.jsx";
import NotFoundPage from "./exceptionComp/NotFoundPage.jsx";

const About = lazy(() => import("./components/About.jsx"));
const Login = lazy(() => import("./components/Login.jsx"));
const Signup = lazy(() => import("./components/Signup.jsx"));
const Transantions = lazy(() => import("./components/Transantions.jsx"));
const TransferMoney = lazy(() => import("./components/TransferMoney.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/transfermoney",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <TransferMoney />
          </Suspense>
        ),
      },
      {
        path: "/transactions",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Transantions />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/loading",
        element: <LoadingPage />
      }
    ],
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
