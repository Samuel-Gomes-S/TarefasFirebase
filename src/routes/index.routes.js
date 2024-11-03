import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";

export default function RoutesApp() {

    return (
        <Routes>
            
            <Route path="/" Component={<Home />} />
            <Route path="/register" Component={<Register />} />

        </Routes>

    )
}