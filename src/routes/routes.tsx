import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import {AuthProvider} from "../provider/AuthProvider.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
        <AuthProvider>
          <Home/>
        </AuthProvider>
    ),
  }
]);

export default routes;