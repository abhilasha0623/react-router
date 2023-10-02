import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialProfile from "./Components/SocialProfile";
import ProfileDetails from "./Components/ProfileDetails";


const ReactRouterSetup = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<SocialProfile />}></Route>
                <Route  path="/list/:id" element={<ProfileDetails />}></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default ReactRouterSetup;