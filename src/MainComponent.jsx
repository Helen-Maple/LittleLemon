import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import HomePage from "./pages/HomePage.jsx";
import BookingPage from "./pages/BookingPage.jsx";

export default function Main() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  );
}