import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes/routes";

function App() {
  useEffect(() => {
    localStorage.setItem(
      "jwt_shop",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZW1haWwuY29tIiwidXNlcklkIjoiNjE4OWY4YTZhOTRkNmM2ODM5Yjk4YmMwIiwibmFtZSI6Ikhvw6BuZyBUaOG6vyAgS2jhuqNpIiwicm9sZSI6IkFkbWluIiwidHlwZSI6ImFjY2Vzc1Rva2VuIiwiaWF0IjoxNjQyMjI5MzM2LCJleHAiOjE2NDIzMTU3MzZ9.CLbcChoLlm3otnId_lGPVK_AJaa8o0l3RdE_UWIY__4"
    );
  }, []);

  let element = useRoutes(routes);
  return <Layout>{element}</Layout>;
}

export default App;
