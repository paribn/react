import React from "react";
import Navbar from "./layout/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";

export default function Main() {
  return (
    <>
      <main className="flex-auto">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/library" element={<Library />}></Route>
        </Routes>
      </main>
    </>
  );
}
