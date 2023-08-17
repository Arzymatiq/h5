import React from "react";
import { Route, Routes } from "react-router-dom";
import Author from "./components/Author";
import UserList from "./components/UserList";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/author/:id" element={<Author />} />
            <Route path="/" element={<UserList />} />
        </Routes>
    );
};

export default MainRoutes;
