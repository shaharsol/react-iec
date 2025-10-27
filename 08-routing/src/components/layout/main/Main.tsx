import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "../../posts/profile/Profile";
import Feed from "../../posts/feed/Feed";
import NotFound from "../not-found/NotFound";

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/feed"/> }/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/feed" element={<Feed />} />
            <Route path="*" element={<NotFound />} />
        </Routes>    
    )
}