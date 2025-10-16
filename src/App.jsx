import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AppLayout from "./components/Layout/AppLayout"
import Home from "./pages/Home"
import About from "./pages/About/index"

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element : <AppLayout />,
    children : [
      {index: true, element: <Home />},
      {path: "/about", element: <About />}
    ]
  }])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
