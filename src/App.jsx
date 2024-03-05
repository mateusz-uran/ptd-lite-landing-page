import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import SingleFeature from "./components/SingleFeature";
import LayoutWrapper from "./LayoutWrapper";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutWrapper children={<Layout />} />,
    },
    {
      path: "/:feature",
      element: <LayoutWrapper children={<SingleFeature />} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
