import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

export default function Routes() {
  return (
    <BrowserRouter basename={"/"}>
      <RRDRouter>
        <Route path="/" element={<Homepage />} />
        <Route path="/me" element={<ProfilePage />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
