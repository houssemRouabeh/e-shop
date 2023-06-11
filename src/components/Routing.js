import React, { Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/notConnectedUsers/home/Home';

const Routing = () => {
  const NotConnectedRoutes = React.lazy(() =>
    import('../pages/notConnectedUsers/notConnectedRouting.js')
  );
  const [isConnected, setIsConnected] = useState(false);
  return (
    <>
      {!isConnected ? (
        <Suspense>
          <Routes>
            <Route path="/*" element={<NotConnectedRoutes />} />
          </Routes>
        </Suspense>
      ) : null}
    </>
  );
};

export default Routing;
