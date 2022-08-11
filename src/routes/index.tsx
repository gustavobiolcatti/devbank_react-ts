import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const SignIn = lazy(() => import("../pages/SignIn"))
const SignUp = lazy(() => import("../pages/SignUp"))

export default function RouterContainer() {
    return (
        <Routes>
            <Route path='/' element={
                <Suspense>
                    <SignIn />
                </Suspense>
            }/>

            <Route path='/signup' element={
                <Suspense>
                    <SignUp />
                </Suspense>
            }/>
        </Routes>
    )
}