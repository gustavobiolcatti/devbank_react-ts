import { Navigate } from 'react-router-dom';

import { useAuth } from 'contexts/auth';

type PrivateRoutesProps = {
  children: JSX.Element;
};

const PrivateRoutes = ({ children }: PrivateRoutesProps): JSX.Element => {
  const { signed }: any = useAuth();

  return signed ? children : <Navigate to="/signin" />;
};

export default PrivateRoutes;
