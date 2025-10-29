import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About/index";
import Chef from "./pages/Chef/index";


function App() {
  const router = createBrowserRouter([{
    path: "/",
    element : <AppLayout />,
    children : [
      {index: true, element: <Home />},
      {path: "/about", element: <About />},
      {path: "/ourChef", element: <Chef />}

    ]
  }])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
