import { lazy, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import Deposit from 'components/organisms/Deposit';
import Statement from 'components/organisms/Statement';
import Transfer from 'components/organisms/Transfer';
import Withdraw from 'components/organisms/Withdraw';

const SignIn = lazy(() => import('pages/SignIn'));
const SignUp = lazy(() => import('pages/SignUp'));
const Dashboard = lazy(() => import('pages/Dashboard'));

import PrivateRoutes from './PrivateRoutes';

// const RouterContainer = (): JSX.Element => {
//   return (
//     <AuthProvider>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <PrivateRoutes>
//               <Outlet />
//             </PrivateRoutes>
//           }
//         >
//           <Route
//             path="/"
//             element={
//               <Suspense fallback={<Loading />}>
//                 <SignIn />
//               </Suspense>
//             }
//           />
//         </Route>

//         <Route
//           path="/signup"
//           element={
//             <PrivateRoutes>
//               <Outlet />
//             </PrivateRoutes>
//           }
//         >
//           <Route
//             path="/signup"
//             element={
//               <Suspense fallback={<Loading />}>
//                 <SignUp />
//               </Suspense>
//             }
//           />
//         </Route>

//         <Route
//           path="/dashboard/*"
//           element={
//             <Suspense fallback={<Loading />}>
//               <Dashboard />
//             </Suspense>
//           }
//         />
//       </Routes>
//     </AuthProvider>
//   );
// };

const RouterContainer = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <Suspense fallback={<Loading />}>
            <SignIn />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        }
      />
      <Route
        element={
          <PrivateRoutes>
            <Outlet />
          </PrivateRoutes>
        }
      >
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
          }
        >
          <Route path="/statement" element={<Statement />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/transfer" element={<Transfer />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RouterContainer;
