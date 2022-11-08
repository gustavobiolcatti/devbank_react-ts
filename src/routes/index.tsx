import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "../components/atoms";


import WatchLogin from "./watch-login";

const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

export default function RouterContainer() {
    return (
        <Routes>
            <Route path='/' element={<WatchLogin />}>
                <Route path='/' element={
                    <Suspense fallback={<Loading />}>
                        <SignIn />
                    </Suspense>
                }/>
            </Route>

            <Route path='/signup' element={<WatchLogin />}>
                <Route path='/signup' element={
                    <Suspense fallback={<Loading />}>
                        <SignUp />
                    </Suspense>
                }/>
            </Route>

            <Route path="/dashboard/*" element={
                <Suspense fallback={<Loading />}>
                    <Dashboard />
                </Suspense>
            }/>
        </Routes>
    )
}