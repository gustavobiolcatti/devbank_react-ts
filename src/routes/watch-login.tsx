import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function WatchLogin() {
    const { signed }: any = useContext(AuthContext);

    return signed ? <Navigate to='/dashboard/statement'/> : <Outlet />
}