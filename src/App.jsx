import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AppLayout from "./components/Layout/AppLayout"
import Home from "./pages/Home"

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element : <AppLayout />,
    children : [
      {index: true, element: <Home />}
    ]
  }])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
