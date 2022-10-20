import { createBrowserRouter } from "react-router-dom"
import { Match } from "./pages/Match"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Match />
    }
])